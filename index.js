require('dotenv').config();

import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const openaiOrg = process.env.OPENAI_ORG;
const openaiApiKey = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
    organization: openaiOrg,
    apiKey: openaiApiKey,
});