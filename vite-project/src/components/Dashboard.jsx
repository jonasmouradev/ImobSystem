import React, { useState } from 'react';

export default function Dashboard() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <h1>Home Page</h1>;
      case 'contract':
        return <h1>Contratos</h1>;
      case 'houses':
        return <h1>Casas</h1>;
      case 'management':
        return <h1>Gestão.</h1>;
      default:
        return <h1>Home Page</h1>;
    }
  }

  return (
    <div>
      <div className="md:flex flex-row">
        <div className="md:w-1/3 h-screen bg-gray-200 flex flex-col items-stretch">
          <button className="flex-grow hover:bg-sky-700" onClick={() => setPage('home')}>Página Inicial</button>
          <button className="flex-grow hover:bg-sky-700" onClick={() => setPage('contract')}>Contratos</button>
          <button className="flex-grow hover:bg-sky-700" onClick={() => setPage('houses')}>Casas</button>
          <button className="flex-grow hover:bg-sky-700" onClick={() => setPage('management')}>Gestão</button>
        </div>
        <div className="md:w-2/3 h-screen bg-gray-100">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}