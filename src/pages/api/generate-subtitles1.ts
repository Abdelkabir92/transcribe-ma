// src/pages/api/generate-subtitles.ts
import type { APIRoute } from "astro";
import {
  segmentsToSRT,
  segmentsToVTT,
  segmentsToTXT,
  type Segment,
} from "../../services/subtitles";

export const POST: APIRoute = async ({ request }) => {
  try {
    const ct = request.headers.get("content-type") || "";
    if (!ct.includes("application/json")) {
      return new Response(JSON.stringify({ success: false, error: "JSON only" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const body = await request.json().catch(() => null) as
      | { segments?: Segment[]; format?: "srt" | "vtt" | "txt" }
      | null;

    const segments = body?.segments;
    const format = body?.format || "srt";

    if (!Array.isArray(segments) || segments.length === 0) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing segments[]" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    let result = "";
    if (format === "vtt") result = segmentsToVTT(segments);
    else if (format === "txt") result = segmentsToTXT(segments);
    else result = segmentsToSRT(segments);

    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ success: false, error: err?.message || "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
