import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

export const projectSchema = z.object({
  id: z.string(),
  name: z.string().min(1).max(100),
  description: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Project = z.infer<typeof projectSchema>;

// Mock data for now
const projects: Project[] = [
  {
    id: '1',
    name: 'Sample Project',
    description: 'A sample project to demonstrate the API',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const projectRouter = router({
  list: publicProcedure.query(() => {
    return projects;
  }),
  
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      const project = projects.find((p) => p.id === input.id);
      if (!project) {
        throw new Error(`No project with id '${input.id}'`);
      }
      return project;
    }),
    
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1).max(100),
        description: z.string().optional(),
      })
    )
    .mutation(({ input }) => {
      const project: Project = {
        id: String(projects.length + 1),
        name: input.name,
        description: input.description,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      projects.push(project);
      return project;
    }),
});