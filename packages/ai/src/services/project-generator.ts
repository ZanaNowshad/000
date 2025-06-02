import { OpenAI } from 'openai';
import { ProjectStructure, ProjectStructureSchema } from '../schemas/project';

export class ProjectGenerator {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || 'mock-api-key',
    });
  }

  async generateProjectStructure(description: string): Promise<ProjectStructure> {
    const prompt = `
      Generate a project structure based on this description: ${description}
      
      Return a JSON object with the following structure:
      {
        "name": "project-name",
        "description": "project description",
        "files": [
          {
            "path": "/path/to/file.ext",
            "content": "file content here"
          }
        ]
      }
    `;

    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No content generated');
    }

    try {
      const parsed = JSON.parse(content);
      return ProjectStructureSchema.parse(parsed);
    } catch (error) {
      throw new Error(`Failed to parse generated content: ${error}`);
    }
  }

  async generateFileContent(
    projectStructure: ProjectStructure,
    filePath: string,
    description: string
  ): Promise<string> {
    const prompt = `
      Given this project structure: ${JSON.stringify(projectStructure)}
      Generate content for the file at path: ${filePath}
      Description: ${description}
      
      Return only the file content, no additional formatting.
    `;

    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    return response.choices[0]?.message?.content || '';
  }
}
