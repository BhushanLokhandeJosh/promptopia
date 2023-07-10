import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();

  try {
    //It is lambada function it dies once it does its
    //function,so its work is to connectToDB whenever
    //any query,mutation is going to happen.
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create new prompt", {
      status: 500,
    });
  }
};
