import 'dotenv/config';
import OpenAI from "openai";
import readline from "readline";

const openaiOrg = process.env.OPENAI_ORG;
const openaiApiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
    organization: openaiOrg,
    apiKey: openaiApiKey,
});

openai
  .chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello" }],
  })
  .then((response) => {
    // Attempt to directly access the message content
    const messageContent = response.choices[0].message.content;

    console.log(messageContent);
  })
  .catch((e) => {
    console.log('Error:', e);
  });
