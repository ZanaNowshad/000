import { ProjectGenerator } from './project-generator';
import { ProjectStructure } from '../schemas/project';

// Mock the OpenAI client
jest.mock('openai', () => {
  return {
    OpenAI: jest.fn().mockImplementation(() => {
      return {
        chat: {
          completions: {
            create: jest.fn().mockResolvedValue({
              choices: [
                {
                  message: {
                    content: JSON.stringify({
                      name: 'test-project',
                      description: 'A test project',
                      files: [
                        {
                          path: '/src/index.js',
                          content: 'console.log("Hello, world!");',
                        },
                        {
                          path: '/package.json',
                          content: '{"name":"test-project","version":"1.0.0"}',
                        },
                      ],
                    }),
                  },
                },
              ],
            }),
          },
        },
      };
    }),
  };
});

describe('ProjectGenerator', () => {
  let projectGenerator: ProjectGenerator;

  beforeEach(() => {
    projectGenerator = new ProjectGenerator();
  });

  it('should generate a project structure from a description', async () => {
    const description = 'Create a simple Node.js project that logs "Hello, world!"';
    const result = await projectGenerator.generateProjectStructure(description);

    expect(result).toBeDefined();
    expect(result.name).toBe('test-project');
    expect(result.description).toBe('A test project');
    expect(result.files).toHaveLength(2);
    expect(result.files[0].path).toBe('/src/index.js');
    expect(result.files[0].content).toBe('console.log("Hello, world!");');
  });

  it('should generate code for a specific file', async () => {
    const projectStructure: ProjectStructure = {
      name: 'test-project',
      description: 'A test project',
      files: [
        {
          path: '/src/index.js',
          content: '',
        },
      ],
    };

    const filePath = '/src/index.js';
    const description = 'A simple file that logs "Hello, world!"';

    const result = await projectGenerator.generateFileContent(
      projectStructure,
      filePath,
      description
    );

    expect(result).toBeDefined();
    expect(result).toBe('console.log("Hello, world!");');
  });
});