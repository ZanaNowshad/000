import { ProjectWizard } from '@/components/wizard';

export default function NewProject() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Create New Project</h1>
      <ProjectWizard />
    </div>
  );
}