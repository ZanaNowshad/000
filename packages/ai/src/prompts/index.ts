import { ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate } from '@langchain/core/prompts';

// Project generation prompt
export const projectGenerationPrompt = ChatPromptTemplate.fromMessages([
  SystemMessagePromptTemplate.fromTemplate(
    `You are an expert full-stack developer specializing in creating well-structured projects.
     Your task is to generate a project structure based on the user's requirements.
     Provide a detailed file tree and explain the purpose of each file.
     Focus on best practices, maintainability, and scalability.`
  ),
  HumanMessagePromptTemplate.fromTemplate(
    `I want to create a new project with the following requirements:
     {requirements}
     
     Please generate a detailed project structure.`
  ),
]);

// Code generation prompt
export const codeGenerationPrompt = ChatPromptTemplate.fromMessages([
  SystemMessagePromptTemplate.fromTemplate(
    `You are an expert programmer who writes clean, efficient, and well-documented code.
     Your task is to generate code for a specific file based on the project context and requirements.
     Follow best practices for the language and framework being used.
     Include appropriate error handling, comments, and tests where applicable.`
  ),
  HumanMessagePromptTemplate.fromTemplate(
    `Project context: {context}
     
     File path: {filePath}
     
     Requirements: {requirements}
     
     Please generate the code for this file.`
  ),
]);