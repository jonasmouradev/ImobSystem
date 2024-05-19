import { useState } from "react";
import Contract from "./contract/Contract";
import Houses from "./Houses";
import Management from "./Management";

export default function HomePage() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <div>Bem-vindo à Página Inicial!</div>;
      case "contract":
        return <Contract />;
      case "houses":
        return <Houses />;
      case "management":
        return <Management />;
      default:
        return <h1>Default</h1>;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-around bg-gray-200 p-4">
        <button
          className="hover:bg-sky-700 p-2"
          onClick={() => setPage("home")}
        >
          ImobSystem
        </button>
        <button
          className="hover:bg-sky-700 p-2"
          onClick={() => setPage("contract")}
        >
          Contratos
        </button>
        <button
          className="hover:bg-sky-700 p-2"
          onClick={() => setPage("houses")}
        >
          Casas
        </button>
        <button
          className="hover:bg-sky-700 p-2"
          onClick={() => setPage("management")}
        >
          Gestão
        </button>
      </div>
      <div className="w-full p-4">
        {renderPage()}
      </div>
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
