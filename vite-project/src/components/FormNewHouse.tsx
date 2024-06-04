import { createAgreement } from "../services/agreement/requests";
import React, { useState } from "react";
import { addToast } from "../components/Toast/toast";
import { HouseType } from "../services/house/types";
import { createHouse } from "../services/house/requests";

export default function FormNewHouse() {
  const [house, setHouse] = useState<HouseType>();
  const [status, setStatus] = useState(false);

  const handleStatus = () => {
    status === true ? setStatus(false) : setStatus(true);
  };

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
    const tenatName = data.get("TenatName") as string;
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
      <div className="h-2/3 w-full max-w-4xl p-10 bg-white rounded-xl shadow-lg">
        <div className="h-full overflow-y-auto p-4">
          <form method="dialog" className="modal-backdrop">
            <div className="flex justify-between items-center mb-6">
              <span className="label-text text-2xl font-bold">
                Cadastrar Nova Casa
              </span>
              <button className="btn btn-sm btn-circle btn-ghost">✕</button>
            </div>
            {/* <div className="flex justify-between items-center mb-6"> */}
            <div className="flex flex-col gap-4 mt-6">
              <h2 className="text-xl font-semibold">Casa</h2>
              <label className="label">
                <span className="label-text">Endereço</span>
              </label>
              <input
                type="text"
                placeholder="Endereço"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Quartos</span>
              </label>
              <input
                type="number"
                placeholder="Quartos"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Tipo</span>
              </label>
              <input
                type="text"
                placeholder="Tipo"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">CEP</span>
              </label>
              <input
                type="text"
                placeholder="CEP"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">User ID</span>
              </label>
              <input
                type="number"
                placeholder="User ID"
                className="input input-bordered w-full"
              />
              {/* <h2 className="text-xl font-semibold">Utilizador</h2>
              <label className="label">
                <span className="label-text">Nome</span>
              </label>
              <input
                type="text"
                placeholder="Nome"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Senha</span>
              </label>
              <input
                type="password"
                placeholder="Senha"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Data de nascimento</span>
              </label>
              <input
                type="date"
                placeholder="Idade"
                className="input input-bordered w-full"
              /> */}
            </div>
            {/* </div> */}
            <button type="submit" className="btn btn-primary mt-6">
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
