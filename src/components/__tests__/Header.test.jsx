import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AudienceProvider } from '../../context/AudienceContext';
import Header from '../Header';

const renderWithProviders = (ui) => {
  return render(
    <BrowserRouter>
      <AudienceProvider>
        {ui}
      </AudienceProvider>
    </BrowserRouter>
  );
};

describe('Header', () => {
  it('renders the DOUBL logo', () => {
    renderWithProviders(<Header />);
    const logo = screen.getByText('DOUBL');
    expect(logo).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
  });

  it('has accessible navigation', () => {
    renderWithProviders(<Header />);
    const nav = screen.getByRole('navigation', { name: /main navigation/i });
    expect(nav).toBeInTheDocument();
  });

  it('renders mobile menu toggle button', () => {
    renderWithProviders(<Header />);
    const menuButton = screen.getByLabelText('Open navigation menu');
    expect(menuButton).toBeInTheDocument();
  });
});
