import { useState } from "react";
import Contract from "./activeContracts/ContractTable";
import TerminatedContracts from "./TerminatedContracts";
import FormNewContract from "./FormNewContract";
import { useNavigate } from "react-router-dom";
import React from "react";
import FormNewHouse from "./FormNewHouse";
import FormNewOwner from "./FormNewOwner";
import FormNewTenant from "./FormNewTenant";
import Login from "./Login";
import Dropdown from "./Dropdown";

export default function HomePage() {
  const [page, setPage] = useState("home");
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
      case "newHouse":
        return <FormNewHouse />;
      case "newHouse":
        return <FormNewOwner />;
      case "newHouse":
        return <FormNewTenant />;
      default:
        return <Login />;
    }
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="md:h-screen flex items-center justify-center custom-background homeBtn">
      <div className="image-background">
        <div className="flex flex row">
          <button className="btn" onClick={handleLogout}>
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <div className="Titulo m-10">
            ImobSystem
            <br />
            Gestão de Contratos
          </div>
          <div className="indicator notification-box p-20">
            {/* <span className="indicator-item badge badge-secondary">99+</span> */}
            <Dropdown />
          </div>
        </div>
        {/* <div className="h-3/5 w-4/5 flex flex-row items-center justify-evenly custom-rectangle"> */}
        <div className="content-overlay">
          {/* Criar Novo Contrato */}
          <button
            onClick={() => {
              const modal = document.getElementById(
                "modal_contract"
              ) as HTMLDialogElement;
              if (modal) {
                modal.showModal();
              }
            }}
            className="box w-48 h-48 flex items-center justify-center border rounded-lg"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http:www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              <dialog id="modal_contract" className="modal">
                <div className="w-full">
                  <p className="py-4">
                    <FormNewContract />
                  </p>
                </div>
              </dialog>
              <h1 className="mt-2 text-center">Novo Contrato</h1>
            </div>
          </button>
          {/* Nova Casa */}
          <button
            onClick={() => {
              const modal = document.getElementById(
                "modal_house"
              ) as HTMLDialogElement;
              if (modal) {
                modal.showModal();
              }
            }}
            className="box w-48 h-48 flex items-center justify-center border rounded-lg"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <h1 className="mt-2 text-center">Nova Casa</h1>
              <dialog id="modal_house" className="modal">
                <div className="w-full">
                  <p className="py-4">
                    <FormNewHouse />
                  </p>
                </div>
              </dialog>
            </div>
          </button>
          {/* Novo Proprietário */}
          <button
            onClick={() => {
              const modal = document.getElementById(
                "modal_owner"
              ) as HTMLDialogElement;
              if (modal) {
                modal.showModal();
              }
            }}
            className="box w-48 h-48 flex items-center justify-center border rounded-lg"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>

              <h1 className="mt-2 text-center">Cadastrar Proprietário</h1>
              <dialog id="modal_owner" className="modal">
                <div className="w-full">
                  <p className="py-4">
                    <FormNewOwner />
                  </p>
                </div>
              </dialog>
            </div>
          </button>
          {/* Novo Inquilino */}
          <button
            onClick={() => {
              const modal = document.getElementById(
                "modal_tenant"
              ) as HTMLDialogElement;
              if (modal) {
                modal.showModal();
              }
            }}
            className="box w-48 h-48 flex items-center justify-center border rounded-lg"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
              <h1 className="mt-2 text-center">Cadastrar Inquilino</h1>
              <dialog id="modal_tenant" className="modal">
                <div className="w-full">
                  <p className="py-4">
                    <FormNewTenant />
                  </p>
                </div>
              </dialog>
            </div>
          </button>
          {/* Abrir Contratos */}
          <button
            onClick={() => navigate("/ActiveContracts")}
            className="box w-48 h-48 flex items-center justify-center border rounded-lg"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http:www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>
              <h1 className="mt-2 text-center">Abrir Contratos</h1>
            </div>
          </button>
          {/* Contratos finalizados */}
          <button
            onClick={() => navigate("/terminated")}
            className="box w-48 h-48 flex items-center justify-center border rounded-lg"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
              <h1 className="mt-2 text-center">Contratos finalizados</h1>
            </div>
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
