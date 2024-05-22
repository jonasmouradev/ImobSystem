
import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
// import { useHistory } from "react-router-dom";

// const route = {
//   path: "/homePage",
//   element: <HomePage />,
// };

export default function Login() {
  // const history = useHistory();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/homePage");
  };

  return (
    <div>
      <div className="container">
        {/* <!--login form--> */}
        <div className="login-form">
          <div className="tittle">Login</div>
          <form action="#">
            <div className="input-box">
              <img className="img-icon" src="/mensagem.png" alt="logo-Email" width="24px" height="24px"  />
              <input type="text" placeholder="Email " required />
            </div>

         
            <div className="input-box ">
              <img className="img-icon" src="/trancar.png" alt="logo-senha" width="24px" height="24px" />
              <input type="password" placeholder="Senha " required />
            </div>

            <div className="forgot">
              {" "}
              <a href="#">Esqueceu a senha?</a>
            </div>
            <div className="input-box">
              <input type="submit" value="Entrar?" />
            </div>
            {/* <div className="divider"> ou </div>
            <div className="midias-sociais">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-github"></i>
            </div> */}
            {/* <div className="sigup-text">
              Não tenho uma conta? <a href="#">crie uma agora</a>
            </div> */}
          </form>
        </div>
        {/* <!--end login form-->
     <!--login img--> */}
        <div className="login-img">
        <img className="img-logo" src="/ImobSystem.png" alt="logo" width="100%"/>
        </div>
        {/* <!--end login img--> */}
      </div>
      {/* <div className="bg-gray-300 h-screen flex justify-center items-center">
        <div className="sm:h-3/4 w-1/2 flex flex-col items-center justify-center gap-2 rounded-xl bg-white xl:w-1/3">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="password" className="grow" value="password" />
          </label>
          <button onClick={handleLogin} className="btn">
            Login
          </button>
        </div>
      </div> */}
    </div>
  );
}
