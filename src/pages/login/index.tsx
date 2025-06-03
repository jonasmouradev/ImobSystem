import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormNewUser from '../../components/FromNewUser';

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('Preencha todos os campos');

  const handleLogin = (event) => {
    event.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

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
};
