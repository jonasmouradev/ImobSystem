import TableContent from "./TableContent.tsx";
import TableHeader from "./TableHeader.jsx";
import React from "react";

export default function Contract() {
  return (
    <>
      <div className="overflow-x-auto flex flex-grow flex-col max-h-vh">
        <TableHeader title="Contratos Ativos" />
        <TableContent />
      </div>
    </>
  );
}
