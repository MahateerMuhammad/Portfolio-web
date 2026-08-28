import { generateSystemPrompt, buildScopedContext } from './src/services/aiContext.js';

const systemPrompt = generateSystemPrompt();
const scopedContext = buildScopedContext("tell me about deepvision");

console.log("SYSTEM PROMPT:\n" + systemPrompt);
console.log("\nSCOPED CONTEXT:\n" + scopedContext);
