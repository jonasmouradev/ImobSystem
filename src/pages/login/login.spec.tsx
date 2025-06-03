import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from '.';
import { BrowserRouter } from 'react-router-dom';

// Mock useNavigate do react-router-dom
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom',
  );
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

function renderWithRouter(ui: React.ReactElement) {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}

describe('Login page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve renderizar os campos de email e senha', () => {
    renderWithRouter(<Login />);
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument();
    expect(screen.getByText(/entrar/i)).toBeInTheDocument();
  });

  it('deve permitir digitar email e senha', () => {
    renderWithRouter(<Login />);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/senha/i);

    fireEvent.change(emailInput, { target: { value: 'teste@teste.com' } });
    fireEvent.change(passwordInput, { target: { value: '12345678' } });

    expect(emailInput).toHaveValue('teste@teste.com');
    expect(passwordInput).toHaveValue('12345678');
  });

  it('deve exibir mensagem de erro se campos estiverem vazios', () => {
    renderWithRouter(<Login />);
    const submitButton = screen.getByDisplayValue(/entrar/i);

    fireEvent.click(submitButton);

    expect(screen.getByText(/preencha todos os campos/i)).toBeInTheDocument();
  });

  it('deve navegar para /home se email e senha forem preenchidos', () => {
    renderWithRouter(<Login />);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/senha/i);
    const submitButton = screen.getByDisplayValue(/entrar/i);

    fireEvent.change(emailInput, { target: { value: 'teste@teste.com' } });
    fireEvent.change(passwordInput, { target: { value: '12345678' } });
    fireEvent.click(submitButton);

    expect(mockNavigate).toHaveBeenCalledWith('/home');
  });

  it('deve exibir o logo e os ícones de email e senha', () => {
    renderWithRouter(<Login />);
    expect(screen.getByAltText(/logo-Email/i)).toBeInTheDocument();
    expect(screen.getByAltText(/logo-senha/i)).toBeInTheDocument();
  });

  it('deve exibir o link "Esqueceu a senha?"', () => {
    renderWithRouter(<Login />);
    expect(screen.getByText(/esqueceu a senha\?/i)).toBeInTheDocument();
  });
});
