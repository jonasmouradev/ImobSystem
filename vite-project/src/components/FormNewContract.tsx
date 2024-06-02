import { useState } from 'react';
import { createAgreement } from '../services/agreement/requests';
import React from 'react';
import { AgreementType } from '../services/agreement';
import { addToast } from '../components/Toast/toast';

export default function FormNewContract() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const ownerName = data.get('OwnerName') as string;
    const tenatName = data.get('TenatName') as string;
    const description = data.get('Description') as string;
    const status = data.get('Status') as unknown as boolean;
    const agreementValue = data.get('AgreementValue') as string;
    const installment = data.get('Installment') as unknown as number;
    const initDate = data.get('InitDate') as unknown as Date;
    const finalDate = data.get('FinalDate') as unknown as Date;
    const House = data.get('House') as string;

    if (
      ownerName !== '' &&
      tenatName !== '' &&
      description !== '' &&
      agreementValue !== '' &&
      installment !== null &&
      initDate !== null &&
      finalDate !== null &&
      House !== ''
    ) {
      handleRegister(
        ownerName,
        tenatName,
        description,
        agreementValue,
        installment,
        status,
        initDate,
        finalDate,
        House,
      );
    } else {
      addToast('Preencha todos os campos', { appearance: 'error' });
    }
  };

  const handleRegister = async (
    owner: string,
    tenant: string,
    description: string,
    valueAgreement: string,
    numInstallments: number,
    status: boolean,
    initDateAgreement: Date,
    finalDateAgreement: Date,
    house: string,
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
        addToast('Cadastro realizado com sucesso', { appearance: 'success' });
      } else {
        addToast('Email ou senha incorretos', { appearance: 'error' });
      }
    } catch (error) {
      console.error('Register failed:', error);
      addToast('O cadastro falhou', { appearance: 'error' });
    }
  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="h-2/3 w-full max-w-4xl p-10 bg-white rounded-xl shadow-lg">
        <div className="h-full overflow-y-auto p-4">
          {' '}
          {/* Ajuste aqui */}
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Cadastrar Novo Contrato</h1>
              <button className="btn btn-sm btn-circle btn-ghost">✕</button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <label className="label">
                  <span className="label-text">Dono da residência</span>
                </label>
                <input
                  type="text"
                  placeholder="Nome"
                  name="OwnerName"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text">Inquilino</span>
                </label>
                <input
                  type="text"
                  placeholder="Nome"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text">Descrição</span>
                </label>
                <textarea
                  placeholder="Descrição"
                  className="textarea textarea-bordered w-full"
                  rows={4}
                />
                <label className="label">
                  <span className="label-text">Valor do Contrato</span>
                </label>
                <input
                  type="number"
                  placeholder="Valor"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text">Número de Parcelas</span>
                </label>
                <input
                  type="number"
                  placeholder="Parcelas"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="label">
                  <span className="label-text">Estado</span>
                </label>
                <input
                  placeholder="status"
                  type="checkbox"
                  className="toggle toggle-primary"
                />
                <label className="label">
                  <span className="label-text">Início do Contrato</span>
                </label>
                <input
                  placeholder="initDate"
                  type="date"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text">Término do Contrato</span>
                </label>
                <input
                  placeholder="endDate"
                  type="date"
                  className="input input-bordered w-full"
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
              <h2 className="text-xl font-semibold">Utilizador</h2>
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
              />
            </div>
            <button type="submit" className="btn btn-primary mt-6">
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
