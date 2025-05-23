import * as React from 'react';
import * as RadixForm from '@radix-ui/react-form';
import { cn } from '../utils';
import { motion } from 'framer-motion';

const Form = RadixForm.Root;

const FormField = RadixForm.Field;

const FormLabel = React.forwardRef<
  React.ElementRef<typeof RadixForm.Label>,
  React.ComponentPropsWithoutRef<typeof RadixForm.Label>
>(({ className, ...props }, ref) => (
  <RadixForm.Label
    ref={ref}
    className={cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className
    )}
    {...props}
  />
));
FormLabel.displayName = RadixForm.Label.displayName;

const FormControl = React.forwardRef<
  React.ElementRef<typeof RadixForm.Control>,
  React.ComponentPropsWithoutRef<typeof RadixForm.Control>
>(({ className, ...props }, ref) => (
  <RadixForm.Control
    ref={ref}
    className={cn(
      'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  />
));
FormControl.displayName = RadixForm.Control.displayName;

const FormMessage = React.forwardRef<
  React.ElementRef<typeof RadixForm.Message>,
  React.ComponentPropsWithoutRef<typeof RadixForm.Message>
>(({ className, ...props }, ref) => (
  <RadixForm.Message
    ref={ref}
    className={cn('text-sm font-medium text-red-500', className)}
    {...props}
  />
));
FormMessage.displayName = RadixForm.Message.displayName;

const FormSubmit = React.forwardRef<
  React.ElementRef<typeof RadixForm.Submit>,
  React.ComponentPropsWithoutRef<typeof RadixForm.Submit> & { animated?: boolean }
>(({ className, animated = false, ...props }, ref) => {
  const Comp = animated ? motion(RadixForm.Submit) : RadixForm.Submit;
  const animationProps = animated
    ? {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <Comp
      ref={ref}
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      {...animationProps}
      {...props}
    />
  );
});
FormSubmit.displayName = RadixForm.Submit.displayName;

export { Form, FormField, FormLabel, FormControl, FormMessage, FormSubmit };