/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WorkspacePage from './page';

// Mock the components used in the page
jest.mock('@/components/workspace', () => ({
  Editor: () => <div data-testid="editor">Editor Component</div>,
  AIChat: () => <div data-testid="ai-chat">AI Chat Component</div>,
}));

// Mock the Lucide icons
jest.mock('lucide-react', () => ({
  Code: () => <div>Code Icon</div>,
  Terminal: () => <div>Terminal Icon</div>,
  Play: () => <div>Play Icon</div>,
  Save: () => <div>Save Icon</div>,
  FileText: () => <div>FileText Icon</div>,
  Settings: () => <div>Settings Icon</div>,
}));

describe('Workspace Page', () => {
  it('renders the workspace with editor by default', () => {
    render(<WorkspacePage />);
    
    expect(screen.getByTestId('editor')).toBeInTheDocument();
    expect(screen.getByTestId('ai-chat')).toBeInTheDocument();
  });

  it('switches to terminal when terminal tab is clicked', () => {
    render(<WorkspacePage />);
    
    // Initially the editor should be visible
    expect(screen.getByTestId('editor')).toBeInTheDocument();
    
    // Click the terminal tab - use a more specific selector
    const terminalButton = screen.getByRole('button', { name: /Terminal/i });
    fireEvent.click(terminalButton);
    
    // Mock the terminal content that would appear
    // Note: This test is simplified as we're not actually rendering a terminal
    // In a real implementation, we would need to mock the terminal component
    expect(screen.queryByTestId('editor')).not.toBeInTheDocument();
  });

  it('toggles AI chat visibility when button is clicked', () => {
    render(<WorkspacePage />);
    
    // Initially AI chat should be visible
    expect(screen.getByTestId('ai-chat')).toBeInTheDocument();
    
    // Click the hide AI button
    fireEvent.click(screen.getByText('Hide AI'));
    
    // Now AI chat should not be visible
    expect(screen.queryByTestId('ai-chat')).not.toBeInTheDocument();
    
    // Click the show AI button
    fireEvent.click(screen.getByText('Show AI'));
    
    // AI chat should be visible again
    expect(screen.getByTestId('ai-chat')).toBeInTheDocument();
  });
});