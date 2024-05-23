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
              ? "active bg-cyan-200 text-cyan-600"
              : "bg-cyan-200 text-cyan-600"
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
              ? "active bg-yellow-200 text-yellow-600"
              : "bg-yellow-200 text-yellow-600"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
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
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
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
              ? "active bg-red-200 text-red-600"
              : "bg-red-200 text-red-600"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
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
