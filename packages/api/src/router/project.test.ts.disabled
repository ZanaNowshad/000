import { inferProcedureInput } from '@trpc/server';
import { createInnerTRPCContext } from '../context';
import { appRouter, AppRouter } from '../router';

describe('Project Router', () => {
  const ctx = createInnerTRPCContext({ session: null });
  const caller = appRouter.createCaller(ctx);

  it('should get all projects', async () => {
    const projects = await caller.project.getAll();
    expect(projects).toBeDefined();
    expect(Array.isArray(projects)).toBe(true);
  });

  it('should get a project by id', async () => {
    // First get all projects to get a valid ID
    const projects = await caller.project.getAll();
    if (projects.length > 0) {
      const firstProject = projects[0];
      const project = await caller.project.getById({ id: firstProject.id });
      expect(project).toBeDefined();
      expect(project.id).toBe(firstProject.id);
    } else {
      // Skip test if no projects exist
      console.log('No projects found, skipping getById test');
    }
  });

  it('should create a new project', async () => {
    type Input = inferProcedureInput<AppRouter['project']['create']>;
    const input: Input = {
      name: 'Test Project',
      description: 'A test project created by Jest',
    };

    const newProject = await caller.project.create(input);
    expect(newProject).toBeDefined();
    expect(newProject.name).toBe(input.name);
    expect(newProject.description).toBe(input.description);

    // Verify it was added to the list
    const projects = await caller.project.getAll();
    const found = projects.some(p => p.id === newProject.id);
    expect(found).toBe(true);
  });

  it('should update a project', async () => {
    // First create a project to update
    const newProject = await caller.project.create({
      name: 'Project to Update',
      description: 'This project will be updated',
    });

    type UpdateInput = inferProcedureInput<AppRouter['project']['update']>;
    const updateInput: UpdateInput = {
      id: newProject.id,
      name: 'Updated Project Name',
      description: 'This project has been updated',
    };

    const updatedProject = await caller.project.update(updateInput);
    expect(updatedProject).toBeDefined();
    expect(updatedProject.id).toBe(newProject.id);
    expect(updatedProject.name).toBe(updateInput.name);
    expect(updatedProject.description).toBe(updateInput.description);
  });

  it('should delete a project', async () => {
    // First create a project to delete
    const newProject = await caller.project.create({
      name: 'Project to Delete',
      description: 'This project will be deleted',
    });

    await caller.project.delete({ id: newProject.id });

    // Verify it was removed from the list
    const projects = await caller.project.getAll();
    const found = projects.some(p => p.id === newProject.id);
    expect(found).toBe(false);
  });
});