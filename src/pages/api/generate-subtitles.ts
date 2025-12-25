// src/pages/api/generate-subtitles.ts
import type { APIRoute } from "astro";
import {
  segmentsToSRT,
  segmentsToVTT,
  segmentsToTXT,
} from "../../services/subtitles";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { segments, format = "srt" } = body;

  if (!segments || !Array.isArray(segments)) {
    return new Response(
      JSON.stringify({ error: "Invalid segments" }),
      { status: 400 }
    );
  }

  let result = "";

  if (format === "vtt") result = segmentsToVTT(segments);
  else if (format === "txt") result = segmentsToTXT(segments);
  else result = segmentsToSRT(segments);

  return new Response(
    JSON.stringify({ success: true, result }),
    { status: 200 }
  );
};
