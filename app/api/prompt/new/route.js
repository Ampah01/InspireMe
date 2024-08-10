import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  const { prompt, tag, userId } = await req.json();
  try {
    await connectToDB();

    const newPrompt = new Prompt({
      prompt,
      tag,
      creator: userId,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating prompt:", error);

    return new Response(JSON.stringify({ error: "Failed to create prompt" }), {
      status: 500,
    });
  }
};
