import { render, screen } from '@testing-library/react';
import Page from './page';

// Mock the components used in the page
jest.mock('@/components/landing/hero', () => ({
  Hero: () => <div data-testid="hero">Hero Component</div>,
}));

jest.mock('@/components/landing/features', () => ({
  Features: () => <div data-testid="features">Features Component</div>,
}));

describe('Landing Page', () => {
  it('renders hero and features sections', () => {
    render(<Page />);
    
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('features')).toBeInTheDocument();
  });
});