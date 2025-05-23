'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Card, CardHeader, CardTitle, CardContent, CardFooter } from '@zaibuld/ui';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

type Step = {
  id: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    id: 'project-type',
    title: 'Project Type',
    description: 'Select the type of project you want to create',
  },
  {
    id: 'project-details',
    title: 'Project Details',
    description: 'Enter the details of your project',
  },
  {
    id: 'dependencies',
    title: 'Dependencies',
    description: 'Select the dependencies for your project',
  },
  {
    id: 'ai-generation',
    title: 'AI Generation',
    description: 'Let AI generate your project structure',
  },
  {
    id: 'review',
    title: 'Review',
    description: 'Review your project before creating it',
  },
];

export function ProjectWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  const renderStepContent = (step: Step) => {
    switch (step.id) {
      case 'project-type':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Web Application', 'Mobile App', 'API', 'Library'].map((type) => (
              <div
                key={type}
                className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium">{type}</h3>
                <p className="text-sm text-gray-500">Create a new {type.toLowerCase()}</p>
              </div>
            ))}
          </div>
        );
      case 'project-details':
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Project Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        );
      case 'dependencies':
        return (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'tRPC', 'Prisma', 'Zod'].map(
                (dep) => (
                  <div
                    key={dep}
                    className="flex items-center space-x-2 border border-gray-200 rounded-full px-3 py-1"
                  >
                    <input
                      type="checkbox"
                      id={dep}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor={dep} className="text-sm">
                      {dep}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>
        );
      case 'ai-generation':
        return (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                Describe your project in detail and let AI generate the structure for you.
              </p>
              <textarea
                rows={5}
                className="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                placeholder="I want to create a blog with authentication, comments, and a dashboard..."
              />
            </div>
            <Button className="w-full">Generate Structure</Button>
          </div>
        );
      case 'review':
        return (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Project Structure</h3>
              <pre className="text-xs overflow-auto p-2 bg-gray-100 rounded">
                {`project/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   └── layout/
│   │       ├── header.tsx
│   │       └── footer.tsx
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── about.tsx
│   │   └── api/
│   │       └── hello.ts
│   └── styles/
│       └── globals.css
├── public/
│   └── images/
│       └── logo.svg
├── package.json
└── tsconfig.json`}
              </pre>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index < currentStep
                    ? 'bg-primary-600 text-white'
                    : index === currentStep
                    ? 'bg-primary-100 border-2 border-primary-600 text-primary-600'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {index < currentStep ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span
                className={`text-xs mt-1 ${
                  index <= currentStep ? 'text-primary-600' : 'text-gray-400'
                }`}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
          <div
            className="absolute top-1/2 left-0 h-0.5 bg-primary-600 -translate-y-1/2 transition-all"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{steps[currentStep].title}</CardTitle>
          <p className="text-gray-500">{steps[currentStep].description}</p>
        </CardHeader>
        <CardContent>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={steps[currentStep].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {renderStepContent(steps[currentStep])}
            </motion.div>
          </AnimatePresence>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
          >
            {currentStep === steps.length - 1 ? 'Create Project' : 'Next'}
            {currentStep !== steps.length - 1 && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}