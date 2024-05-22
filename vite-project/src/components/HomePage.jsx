import { useState } from "react";
import Contract from "./activeContracts/ContractTable";
import TerminatedContracts from "./TerminatedContracts";
import FormNewContract from "./FormNewContract";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [page, setPage] = useState("home");
  const [activePage, setActivePage] = useState("home");
  const navigate = useNavigate();

  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <div className="pl-5 pt-5">
            <button className="btn btn-primary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        );
      case "contract":
        return <Contract />;
      case "terminated":
        return <TerminatedContracts />;
      case "newContract":
        return <FormNewContract />;
      default:
        return <h1>Default</h1>;
    }
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="btm-nav">
        <button
          onClick={() => {
            setPage("home");
            setActivePage("home");
          }}
          className={`${
            activePage === "home"
              ? "active bg-pink-200 text-pink-600"
              : "bg-pink-200 text-pink-600"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="btm-nav-label">Página Inicial</span>
        </button>
        <button
          onClick={() => {
            setPage("newContract");
            setActivePage("newContract");
          }}
          className={`${
            activePage === "newContract"
              ? "active bg-teal-200 text-teal-600"
              : "bg-teal-200 text-teal-600"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="btm-nav-label">Novo Contrato</span>
        </button>
        <button
          onClick={() => {
            setPage("contract");
            setActivePage("contract");
          }}
          className={`${
            activePage === "contract"
              ? "active bg-blue-200 text-blue-600 border-blue-600"
              : "bg-blue-200 text-blue-600 border-blue-600"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="btm-nav-label">Contratos Ativos</span>
        </button>
        <button
          onClick={() => {
            setPage("terminated");
            setActivePage("terminated");
          }}
          className={`${
            activePage === "terminated"
              ? "active bg-teal-200 text-teal-600"
              : "bg-teal-200 text-teal-600"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="btm-nav-label">Contratos Encerrados</span>
        </button>
      </div>
      <div className="w-full p-0">{renderPage()}</div>
    </div>
  );
}

// import React from 'react';
// import '../index.css'; // Corrigido o caminho da importação

// export default function HomePage() {
//   return (
//     <div className="page-container">
//       <header className="header">
//         {/* <nav className="navbar">
//           <a href="#home" className="nav-link">Página Inicial</a>
//           <a href="#contracts" className="nav-link">Contratos</a>
//           <a href="#houses" className="nav-link">Casas</a>
//           <a href="#management" className="nav-link">Gestão</a>
//         </nav> */}
//       </header>
//       <main className="main-content">
//         <button className="btn">
//           <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//           </svg>
//           Button
//         </button>
//         {/* Adicione mais botões ou conteúdo aqui */}
//       </main>
//     </div>
//   );
// }
