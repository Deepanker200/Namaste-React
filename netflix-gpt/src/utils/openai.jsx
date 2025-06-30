import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const client = new OpenAI({
    apiKey: OPENAI_KEY, // This is the default and can be omitted
    baseURL: "https://api.groq.com/openai/v1", // 👈 important: custom base URL
    dangerouslyAllowBrowser: true

});

export default client;