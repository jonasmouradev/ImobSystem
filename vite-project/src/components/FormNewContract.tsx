import { createAgreement } from "../services/agreement/requests";
import React, { useState } from "react";
import { addToast } from "../components/Toast/toast";
import { HouseType } from "../services/house/types";
import { createHouse } from "../services/house/requests";

export default function FormNewContract() {
  const [house, setHouse] = useState<HouseType>();
  const [status, setStatus] = useState(false);
  const [initDate, setInitDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const handleHouseSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const address = data.get("Address") as string;
    const roomsNumber = data.get("RoomsNumber") as unknown as number;
    const type = data.get("Type") as string;
    const CEP = data.get("CEP") as string;
    if (address !== "" && roomsNumber !== 0 && type !== "" && CEP !== "") {
      handleHouseRegister(address, roomsNumber, type, CEP);
    } else {
      addToast("Preencha todos os campos", { appearance: "error" });
    }
  };

  const handleHouseRegister = async (
    address: string,
    rooms: number,
    type: string,
    zipCode: string
  ) => {
    try {
      const data = await createHouse({
        address,
        rooms,
        type,
        zipCode,
      });

      if (data.success) {
        addToast("Cadastro realizado com sucesso", { appearance: "success" });
        setHouse({ address, rooms, type, zipCode });
      } else {
        addToast("Email ou senha incorretos", { appearance: "error" });
      }
    } catch (error) {
      console.error("Register failed:", error);
      addToast("O cadastro falhou", { appearance: "error" });
    }
  };

  const handleAgreementSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const ownerName = data.get("OwnerName") as string;
    const tenatName = data.get("TenantName") as string;
    const description = data.get("Description") as string;
    const agreementValue = data.get("AgreementValue") as string;
    const installment = data.get("Installment") as unknown as number;
    const initDate = data.get("InitDate") as unknown as Date;
    const finalDate = data.get("FinalDate") as unknown as Date;

    if (
      ownerName !== "" &&
      tenatName !== "" &&
      description !== "" &&
      agreementValue !== "" &&
      installment !== null &&
      initDate !== null &&
      finalDate !== null
    ) {
      handleAgreementRegister(
        ownerName,
        tenatName,
        description,
        agreementValue,
        installment,
        status,
        initDate,
        finalDate,
        house
      );
    } else {
      addToast("Preencha todos os campos", { appearance: "error" });
    }
  };

  const handleAgreementRegister = async (
    owner: string,
    tenant: string,
    description: string,
    valueAgreement: string,
    numInstallments: number,
    status: boolean,
    initDateAgreement: Date,
    finalDateAgreement: Date,
    house: HouseType | undefined
  ) => {
    try {
      const data = await createAgreement({
        owner,
        tenant,
        description,
        valueAgreement,
        numInstallments,
        status,
        initDateAgreement,
        finalDateAgreement,
        house,
      });

      if (data.success) {
        addToast("Cadastro realizado com sucesso", { appearance: "success" });
      } else {
        addToast("Email ou senha incorretos", { appearance: "error" });
      }
    } catch (error) {
      console.error("Register failed:", error);
      addToast("O cadastro falhou", { appearance: "error" });
    }
  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="h-4/5 w-full max-w-4xl p-10 bg-white rounded-xl shadow-lg 2xl:h-min">
        <div className="h-full overflow-y-auto p-4">
          {/* <form onSubmit={handleAgreementSubmit}> */}
          <form
            method="dialog"
            className="modal-backdrop"
            onSubmit={handleAgreementSubmit}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="label-text text-2xl font-bold">
                Cadastrar Novo Contrato
              </span>
              <button className="btn btn-sm btn-circle btn-ghost">✕</button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <label className="label">
                  <span className="label-text">Dono da residência</span>
                </label>
                <input
                  id="OwnerName"
                  type="text"
                  placeholder="Nome"
                  name="OwnerName"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text">Inquilino</span>
                </label>
                <input
                  id="TenantName"
                  type="text"
                  placeholder="Nome"
                  className="input input-bordered w-full"
                />

                <label className="label">
                  <span className="label-text">Valor do Contrato</span>
                </label>
                <input
                  id="AgreementValue"
                  type="number"
                  placeholder="Valor"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text">Número de Parcelas</span>
                </label>
                <input
                  id="Installment"
                  type="number"
                  placeholder="Parcelas"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="label">
                  <span className="label-text">Início do Contrato</span>
                </label>
                <input
                  id="InitDate"
                  placeholder="Início"
                  type="date"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text">Término do Contrato</span>
                </label>
                <input
                  id="FinalDate"
                  placeholder="Término"
                  type="date"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text">Descrição</span>
                </label>
                <textarea
                  id="Description"
                  placeholder="Descrição"
                  className="textarea textarea-bordered w-full text-black"
                  rows={4}
                />
                {/* <label className="label">
                  <span className="label-text">Período do Acordo</span>
                </label>
                <input
                  type="date"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text">Data Final do Acordo</span>
                </label>
                <input
                  type="date"
                  className="input input-bordered w-full"
                /> */}
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="btn btn-primary"
                // onClick={handleAgreementRegister}
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
