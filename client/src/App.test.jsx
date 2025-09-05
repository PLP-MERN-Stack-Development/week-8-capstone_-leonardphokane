import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App Root', () => {
  it('renders without crashing and shows landing content', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/community finance/i)).toBeInTheDocument();
  });

  // Add route-based tests as your app grows
});