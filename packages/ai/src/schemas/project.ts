import { z } from 'zod';

export const ProjectFileSchema = z.object({
  path: z.string(),
  content: z.string(),
});

export const ProjectStructureSchema = z.object({
  name: z.string(),
  description: z.string(),
  files: z.array(ProjectFileSchema),
});

export type ProjectFile = z.infer<typeof ProjectFileSchema>;
export type ProjectStructure = z.infer<typeof ProjectStructureSchema>;
