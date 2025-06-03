import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsersStore } from '@/store/users';

export default function Login() {
  const navigate = useNavigate();
  const findUserByCredentials = useUsersStore(
    (state) => state.findUserByCredentials,
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    const user = findUserByCredentials(email);
    if (!user || user.password !== password) {
      setErrorMessage('Email ou senha inválidos.');
      return;
    }

    setErrorMessage('');
    navigate('/home');
  };

  return (
    <div className="parent-container">
      <div className="page-container">
        <div className="container">
          <div className="login-form">
            <div className="title">Login</div>
            <form onSubmit={handleLogin}>
              <div className="input-box">
                <img
                  className="img-icon"
                  src="/mensagem.png"
                  alt="logo-Email"
                  width="24px"
                  height="24px"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-box ">
                <img
                  className="img-icon"
                  src="/trancar.png"
                  alt="logo-senha"
                  width="24px"
                  height="24px"
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}

              <div className="forgot">
                <a href="/forgot-password">Esqueceu a senha?</a>
              </div>
              <div className="forgot">
                <a href="/registration">Não possui login? Cadastre-se aqui</a>
              </div>
              <div className="input-box">
                <input type="submit" value="Entrar" />
              </div>
            </form>
          </div>

          <div className="login-img">
            <img
              className="img-logo"
              src="/ImobSystem.png"
              alt="logo"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
