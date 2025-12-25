// src/pages/api/paypal/create-subscription.ts
import type { APIRoute } from "astro";

const PLAN_MAP = {
  basic: import.meta.env.PAYPAL_PLAN_BASIC,
  pro: import.meta.env.PAYPAL_PLAN_PRO,
  enterprise: import.meta.env.PAYPAL_PLAN_ENTERPRISE,
} as const;

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const planKey = url.searchParams.get("plan") as keyof typeof PLAN_MAP | null;

    if (!planKey || !PLAN_MAP[planKey]) {
      return new Response(
        JSON.stringify({ error: "Invalid plan" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const PLAN_ID = PLAN_MAP[planKey];

    const clientId = import.meta.env.PAYPAL_CLIENT_ID;
    const clientSecret = import.meta.env.PAYPAL_CLIENT_SECRET;
    const paypalApi = import.meta.env.PAYPAL_API; // عندك فـ .env

    if (!clientId || !clientSecret || !paypalApi) {
      return new Response(
        JSON.stringify({ error: "Missing PayPal credentials" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // 1) نجيب access token من PayPal
    const basicAuth = Buffer
      .from(`${clientId}:${clientSecret}`)
      .toString("base64");

    const tokenRes = await fetch(`${paypalApi}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    const tokenData = await tokenRes.json();

    if (!tokenRes.ok) {
      console.error("PAYPAL TOKEN ERROR:", tokenData);
      return new Response(
        JSON.stringify({ error: "PayPal token error", details: tokenData }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const accessToken = tokenData.access_token;

    // 2) نخلق الاشتراك
    const subRes = await fetch(`${paypalApi}/v1/billing/subscriptions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        plan_id: PLAN_ID,
        application_context: {
          brand_name: "Transcribe.ma",
          user_action: "SUBSCRIBE_NOW",
          return_url: `${import.meta.env.APP_URL}/dashboard`,
          cancel_url: `${import.meta.env.APP_URL}/pricing`,
        },
      }),
    });

    const subData = await subRes.json();

    if (!subRes.ok) {
      console.error("PAYPAL SUBSCRIPTION ERROR:", subData);
      return new Response(
        JSON.stringify({ error: "PayPal subscription error", details: subData }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const approveLink = subData.links?.find((l: any) => l.rel === "approve")?.href;

    if (!approveLink) {
      console.error("PAYPAL: approve link not found", subData);
      return new Response(
        JSON.stringify({ error: "Approve link not found", details: subData }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // نحولو مباشرة لصفحة الأداء ديال PayPal
    return Response.redirect(approveLink, 302);
  } catch (err: any) {
    console.error("PAYPAL ERROR:", err);
    return new Response(
      JSON.stringify({ error: "PayPal error", details: String(err) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
