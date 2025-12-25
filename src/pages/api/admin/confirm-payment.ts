// src/pages/api/admin/confirm-payment.ts
import type { APIRoute } from "astro";
import { prisma } from "../../../lib/prisma";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const paymentId = Number(formData.get("paymentId"));
  const action = String(formData.get("action") || "approve");

  if (!paymentId) {
    return new Response("Missing paymentId", { status: 400 });
  }

  const payment = await prisma.payment.findUnique({
    where: { id: paymentId },
    include: { user: true, plan: true },
  });

  if (!payment) {
    return new Response("Payment not found", { status: 404 });
  }

  if (action === "reject") {
    await prisma.payment.update({
      where: { id: paymentId },
      data: { status: "REJECTED" },
    });
  } else {
    // نفعّل الخطة: نزيد الرصيد وخطته
    await prisma.$transaction([
      prisma.user.update({
        where: { id: payment.userId },
        data: {
          planId: payment.planId,
          minutesLeft: { increment: payment.plan.minutes },
          summarizeLeft: { increment: payment.plan.summarizeCount },
          articlesLeft: { increment: payment.plan.articleCount },
          isActive: true,
        },
      }),
      prisma.payment.update({
        where: { id: paymentId },
        data: { status: "APPROVED" },
      }),
    ]);
  }

  return new Response(null, {
    status: 303,
    headers: { Location: "/admin" },
  });
};
