import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login Page', () => {
  it('renders login form', () => {
    render(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('submits form with valid credentials', () => {
    render(<Login />);
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'securePass123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    // Add assertions for API call or redirect
  });
});