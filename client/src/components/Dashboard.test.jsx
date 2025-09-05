import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard Component', () => {
  it('renders dashboard heading', () => {
    render(<Dashboard />);
    const heading = screen.getByRole('heading', { name: /dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  // Add more tests for widgets, charts, or socket events as needed
});