import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AudienceProvider } from '../../context/AudienceContext';
import Landing from '../Landing';

const renderWithProviders = (ui) => {
  return render(
    <BrowserRouter>
      <AudienceProvider>
        {ui}
      </AudienceProvider>
    </BrowserRouter>
  );
};

describe('Landing', () => {
  it('renders the main heading', () => {
    renderWithProviders(<Landing />);
    expect(screen.getByText(/the end of/i)).toBeInTheDocument();
    expect(screen.getByText(/sizing/i)).toBeInTheDocument();
  });

  it('renders the call-to-action button', () => {
    renderWithProviders(<Landing />);
    const ctaButton = screen.getByText(/get my fit profile/i);
    expect(ctaButton).toBeInTheDocument();
  });

  it('renders trusted retailers section', () => {
    renderWithProviders(<Landing />);
    expect(screen.getByText(/trusted by global retailers/i)).toBeInTheDocument();
  });
});
