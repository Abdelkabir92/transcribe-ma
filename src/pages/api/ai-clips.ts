import { exec } from "child_process";
import fs from "fs";
import path from "path";
import OpenAI from "openai";

export const prerender = false;

export async function POST({ request }) {
  try {
    const form = await request.formData();
    const file = form.get("file");
    const platform = form.get("platform");
    const clipDuration = Number(form.get("clipDuration"));
    const quality = form.get("quality");
    const lang = form.get("lang");
    const realDuration = Number(form.get("realDuration"));

    console.log("AI-CLIPS START");
    console.log("Duration:", realDuration);
    console.log("Clip duration:", clipDuration);
    console.log("Platform:", platform);

    // --------------------------
    // API KEY CHECK
    // --------------------------
    const apiKey = import.meta.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.error("❌ OpenAI API KEY NOT FOUND");
      return new Response("Missing API Key", { status: 500 });
    }

    const client = new OpenAI({ apiKey });

    // --------------------------
    // SAVE INPUT TEMP FILE
    // --------------------------
    const inputPath = "./tmp/input.mp4";
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(inputPath, buffer);

    // --------------------------
    // CREATE OUTPUT FOLDER
    // --------------------------
    const outputFolder = "./public/clips/";
    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder, { recursive: true });
    }

    // --------------------------
    // CUT VIDEO USING FFMPEG
    // --------------------------
    const outputClip = `clip_${Date.now()}.mp4`;
    const outputPath = path.join(outputFolder, outputClip);

    const ffmpegCmd = `ffmpeg -i ${inputPath} -t ${clipDuration} -vf "scale=1080:-1" ${outputPath}`;

    console.log("Running:", ffmpegCmd);

    await new Promise((resolve, reject) => {
      exec(ffmpegCmd, (err, stdout, stderr) => {
        if (err) {
          console.error("FFMPEG ERROR:", stderr);
          reject(err);
        } else {
          resolve(stdout);
        }
      });
    });

    return new Response(
      JSON.stringify({
        ok: true,
        clip: outputClip,
        url: `/clips/${outputClip}`,
      }),
      { status: 200 }
    );

  } catch (err) {
    console.error("AI-CLIPS ERROR:", err);
    return new Response("Server error", { status: 500 });
  }
}
