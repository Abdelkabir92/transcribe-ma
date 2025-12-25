// src/services/subtitles.ts
export type Segment = { start: number; end: number; text: string };

function pad(n: number, len = 2) {
  return String(n).padStart(len, "0");
}

function srtTime(sec: number) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = Math.floor(sec % 60);
  const ms = Math.floor((sec - Math.floor(sec)) * 1000);
  return `${pad(h)}:${pad(m)}:${pad(s)},${pad(ms, 3)}`;
}

function vttTime(sec: number) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = Math.floor(sec % 60);
  const ms = Math.floor((sec - Math.floor(sec)) * 1000);
  return `${pad(h)}:${pad(m)}:${pad(s)}.${pad(ms, 3)}`;
}

export function segmentsToSRT(segments: Segment[]) {
  return segments
    .map((seg, i) => {
      const text = (seg.text || "").trim();
      return `${i + 1}\n${srtTime(seg.start)} --> ${srtTime(seg.end)}\n${text}\n`;
    })
    .join("\n");
}

export function segmentsToVTT(segments: Segment[]) {
  const body = segments
    .map((seg) => {
      const text = (seg.text || "").trim();
      return `${vttTime(seg.start)} --> ${vttTime(seg.end)}\n${text}\n`;
    })
    .join("\n");
  return `WEBVTT\n\n${body}`;
}

export function segmentsToTXT(segments: Segment[]) {
  return segments.map((s) => (s.text || "").trim()).join("\n").trim();
}
