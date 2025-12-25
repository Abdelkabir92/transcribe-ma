// src/pages/api/admin/update-user-balance.ts
import type { APIRoute } from "astro";
import { prisma } from "../../../lib/prisma";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const userId = Number(formData.get("userId"));
  const deltaMinutes = Number(formData.get("deltaMinutes") || 0);
  const deltaSummaries = Number(formData.get("deltaSummaries") || 0);
  const deltaArticles = Number(formData.get("deltaArticles") || 0);

  if (!userId) {
    return new Response("Missing userId", { status: 400 });
  }

  await prisma.user.update({
    where: { id: userId },
    data: {
      minutesLeft: { increment: deltaMinutes },
      summarizeLeft: { increment: deltaSummaries },
      articlesLeft: { increment: deltaArticles },
    },
  });

  return new Response(null, {
    status: 303,
    headers: { Location: "/admin" },
  });
};
