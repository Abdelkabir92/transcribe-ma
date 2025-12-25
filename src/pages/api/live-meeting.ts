import type { APIContext } from "astro";
import { OpenAI } from "openai";

export const GET = async ({ request, locals }: APIContext) => {
  const { socket, response } = Deno.upgradeWebSocket(request);

  const client = new OpenAI({
    apiKey: import.meta.env.OPENAI_API_KEY,
  });

  let stream: any = null;

  socket.onopen = () => {
    console.log("WebSocket connected.");

    stream = client.realtime.sessions.stream({
      model: "gpt-4o-realtime-preview",
    });

    stream.on("response.output_text.delta", ({ text }) => {
      socket.send(JSON.stringify({ text }));
    });
  };

  socket.onmessage = async (event) => {
    const audioData = event.data;
    if (stream) {
      stream.send({ type: "input_audio_buffer.append", audio: audioData });
    }
  };

  socket.onclose = () => {
    console.log("WebSocket closed.");
    if (stream) stream.close();
  };

  return response;
};
