import { ChatOpenAI } from '@langchain/openai';

// Initialize the model with default settings
export const chatModel = new ChatOpenAI({
  modelName: 'gpt-4-turbo',
  temperature: 0.7,
});

// Initialize a more deterministic model for code generation
export const codeModel = new ChatOpenAI({
  modelName: 'gpt-4-turbo',
  temperature: 0.2,
});