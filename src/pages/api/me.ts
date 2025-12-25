import type { APIRoute } from 'astro';
import { verifyAuthToken, getTokenFromRequest } from '../../lib/auth';
import { prisma } from '../../lib/prisma';

export const GET: APIRoute = async ({ request }) => {
  const token = getTokenFromRequest(request);
  if (!token) {
    return new Response(JSON.stringify({ user: null }), { status: 200 });
  }

  const payload = verifyAuthToken(token);
  if (!payload) {
    return new Response(JSON.stringify({ user: null }), { status: 200 });
  }

  const user = await prisma.user.findUnique({
    where: { id: payload.id },
    select: { id: true, name: true, email: true, role: true },
  });

  return new Response(JSON.stringify({ user }), { status: 200 });
};
