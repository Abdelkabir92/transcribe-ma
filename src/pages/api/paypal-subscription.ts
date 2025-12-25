// src/pages/api/paypal-subscription.ts
import type { APIRoute } from "astro";
import fs from "fs";
import path from "path";

export const prerender = false;

const USERS_PATH = path.join(process.cwd(), "src", "data", "users.json");

// تعريف الكريدت لكل خطة
const PLANS: Record<
  string,
  { minutes: number; summaries: number; articles: number; label: string }
> = {
  basic: {
    minutes: 60,
    summaries: 20,
    articles: 20,
    label: "Basic",
  },
  pro: {
    minutes: 180,
    summaries: 50,
    articles: 50,
    label: "Pro",
  },
  enterprise: {
    minutes: 600,
    summaries: 150,
    articles: 150,
    label: "Enterprise",
  },
};

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const body = await request.json();
    const { planKey, subscriptionID } = body;

    if (!planKey || !subscriptionID) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing data" }),
        { status: 400 }
      );
    }

    const plan = PLANS[planKey];
    if (!plan) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid plan" }),
        { status: 400 }
      );
    }

    // نجيب اليوزر من الكوكي
    const userId = cookies.get("user_token")?.value;
    if (!userId) {
      return new Response(
        JSON.stringify({ success: false, error: "Not logged in" }),
        { status: 401 }
      );
    }

    // نقرأ users.json
    const raw = fs.readFileSync(USERS_PATH, "utf-8");
    const users = JSON.parse(raw);

    const user = users.find((u: any) => String(u.id) === String(userId));
    if (!user) {
      return new Response(
        JSON.stringify({ success: false, error: "User not found" }),
        { status: 404 }
      );
    }

    // نزيد الكريدت حسب الخطة (نستعمل نفس الحقول اللي عندك)
    user.minutes = (user.minutes || 0) + plan.minutes;
    user.summaries = (user.summaries || 0) + plan.summaries;
    user.articles = (user.articles || 0) + plan.articles;

    // نزيد شوية معلومات عن الاشتراك
    user.lastPlan = plan.label;
    user.lastPlanKey = planKey;
    user.lastSubscriptionId = subscriptionID;
    user.isActive = true;

    fs.writeFileSync(USERS_PATH, JSON.stringify(users, null, 2), "utf-8");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("PAYPAL SUBSCRIPTION ERROR:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Server error" }),
      { status: 500 }
    );
  }
};
