import React, { useState } from 'react';
import { addToast } from '@/components/Toast/toast';
import { Label } from '@/components/Label';
import { Input } from '@/components/Input';
import { useFormsStore } from '@/store/forms';
import { v4 as uuidv4 } from 'uuid';

export default function FormNewContract() {
  const addNewContract = useFormsStore((state) => state.addNewContract);

  const [form, setForm] = useState({
    ownerName: '',
    tenantName: '',
    house: '',
    agreementValue: '',
    installment: '',
    initDate: '',
    finalDate: '',
    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleAgreementSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {
      ownerName,
      tenantName,
      house,
      agreementValue,
      installment,
      initDate,
      finalDate,
      description,
    } = form;

    if (
      !ownerName ||
      !tenantName ||
      !house ||
      !agreementValue ||
      !installment ||
      !initDate ||
      !finalDate ||
      !description
    ) {
      addToast('Preencha todos os campos', { appearance: 'error' });
      return;
    }

    addNewContract({
      id: uuidv4(),
      propertyId: house,
      tenantId: tenantName,
      startDate: initDate,
      endDate: finalDate,
      value: Number(agreementValue),
      // You can add more fields as needed
    });

    addToast('Contrato cadastrado com sucesso', { appearance: 'success' });

    setForm({
      ownerName: '',
      tenantName: '',
      house: '',
      agreementValue: '',
      installment: '',
      initDate: '',
      finalDate: '',
      description: '',
    });
  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="h-4/5 w-full max-w-4xl p-10 bg-white rounded-xl shadow-lg 2xl:h-min">
        <div className="h-full overflow-y-auto p-4">
          <form
            onSubmit={handleAgreementSubmit}
            method="dialog"
            className="modal-backdrop"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="label-text text-2xl font-bold">
                Cadastrar Novo Contrato
              </span>
              <button className="btn btn-sm btn-circle btn-ghost" type="button">
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <Label>Proprietário</Label>
                <Input
                  id="ownerName"
                  placeholder="Nome"
                  value={form.ownerName}
                  onChange={handleChange}
                />
                <Label>Inquilino</Label>
                <Input
                  id="tenantName"
                  placeholder="Nome"
                  value={form.tenantName}
                  onChange={handleChange}
                />
                <Label>Casa</Label>
                <Input
                  id="house"
                  placeholder="Casa"
                  value={form.house}
                  onChange={handleChange}
                />
                <Label>Valor do Contrato</Label>
                <Input
                  id="agreementValue"
                  type="number"
                  placeholder="Valor"
                  value={form.agreementValue}
                  onChange={handleChange}
                />
                <Label>Número de Parcelas</Label>
                <Input
                  id="installment"
                  type="number"
                  placeholder="Parcelas"
                  value={form.installment}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <Label>Início do Contrato</Label>
                <Input
                  id="initDate"
                  placeholder="Início"
                  type="date"
                  value={form.initDate}
                  onChange={handleChange}
                />
                <Label>Término do Contrato</Label>
                <Input
                  id="finalDate"
                  placeholder="Término"
                  type="date"
                  value={form.finalDate}
                  onChange={handleChange}
                />
                <Label>Descrição</Label>
                <textarea
                  id="description"
                  placeholder="Descrição"
                  className="textarea textarea-bordered w-full text-black"
                  rows={4}
                  value={form.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-10">
              <button type="submit" className="btn btn-primary">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
