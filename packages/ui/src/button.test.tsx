import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './components/button';

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary-600');
  });

  it('applies the correct variant classes', () => {
    render(<Button variant="outline">Outline Button</Button>);
    const button = screen.getByRole('button', { name: /outline button/i });
    expect(button).toHaveClass('border');
    expect(button).toHaveClass('border-primary-600');
  });

  it('applies the correct size classes', () => {
    render(<Button size="sm">Small Button</Button>);
    const button = screen.getByRole('button', { name: /small button/i });
    expect(button).toHaveClass('px-3');
    expect(button).toHaveClass('h-8');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled Button
      </Button>
    );
    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders with animation when animated prop is true', () => {
    render(<Button animated>Animated Button</Button>);
    // Since we're using framer-motion, the button becomes a motion.button
    // and the animation is applied via props, not classes
    const button = screen.getByRole('button', { name: /animated button/i });
    expect(button).toBeInTheDocument();
    // We can't easily test the animation props, so we'll just check it renders
  });
});