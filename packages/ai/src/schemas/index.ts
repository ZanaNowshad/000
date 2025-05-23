import { z } from 'zod';

// Schema for file operations
export const FileOperationSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('CREATE_FILE'),
    path: z.string(),
    content: z.string(),
  }),
  z.object({
    type: z.literal('UPDATE_FILE'),
    path: z.string(),
    content: z.string(),
  }),
  z.object({
    type: z.literal('DELETE_FILE'),
    path: z.string(),
  }),
  z.object({
    type: z.literal('RUN_COMMAND'),
    command: z.string(),
  }),
  z.object({
    type: z.literal('SWITCH_TAB'),
    path: z.string(),
  }),
]);

export type FileOperation = z.infer<typeof FileOperationSchema>;

// Schema for project structure
export const ProjectStructureSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  files: z.array(
    z.object({
      path: z.string(),
      description: z.string().optional(),
      content: z.string().optional(),
    })
  ),
});

export type ProjectStructure = z.infer<typeof ProjectStructureSchema>;