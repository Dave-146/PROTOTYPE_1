import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AudienceProvider, useAudience } from '../AudienceContext';

const TestComponent = () => {
  const { isB2B, toggleAudience } = useAudience();
  return (
    <div>
      <span data-testid="isB2B">{isB2B ? 'B2B' : 'B2C'}</span>
      <button onClick={toggleAudience}>Toggle</button>
    </div>
  );
};

describe('AudienceContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('provides default B2C state', () => {
    render(
      <BrowserRouter>
        <AudienceProvider>
          <TestComponent />
        </AudienceProvider>
      </BrowserRouter>
    );
    
    expect(screen.getByTestId('isB2B')).toHaveTextContent('B2C');
  });

  it('toggles between B2B and B2C', () => {
    render(
      <BrowserRouter>
        <AudienceProvider>
          <TestComponent />
        </AudienceProvider>
      </BrowserRouter>
    );
    
    const toggleButton = screen.getByText('Toggle');
    expect(screen.getByTestId('isB2B')).toHaveTextContent('B2C');
    
    act(() => {
      toggleButton.click();
    });
    
    expect(screen.getByTestId('isB2B')).toHaveTextContent('B2B');
  });

  it('persists state to localStorage', () => {
    render(
      <BrowserRouter>
        <AudienceProvider>
          <TestComponent />
        </AudienceProvider>
      </BrowserRouter>
    );
    
    const toggleButton = screen.getByText('Toggle');
    
    act(() => {
      toggleButton.click();
    });
    
    expect(localStorage.getItem('doubl_audience_preference')).toBe('true');
  });
});
