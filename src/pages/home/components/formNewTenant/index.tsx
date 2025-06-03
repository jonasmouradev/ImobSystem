import React, { useState } from 'react';
import { addToast } from '@/components/Toast/toast';
import { useFormsStore } from '@/store/forms';
import { v4 as uuidv4 } from 'uuid';

export default function FormNewTenant() {
  const addNewTenant = useFormsStore((state) => state.addNewTenant);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    cpf: '',
    email: '',
    birth: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleTenantSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, phone, cpf, email, birth } = form;

    if (!name || !phone || !cpf || !email || !birth) {
      addToast('Preencha todos os campos', { appearance: 'error' });
      return;
    }

    addNewTenant({
      id: uuidv4(),
      name,
      phone,
      email,
      // You can add cpf and birth if you extend the zustand store type
    });

    addToast('Cadastro realizado com sucesso', { appearance: 'success' });

    setForm({
      name: '',
      phone: '',
      cpf: '',
      email: '',
      birth: '',
    });
  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="h-4/5 w-1/2 max-w-4xl p-10 bg-white rounded-xl shadow-lg 2xl:h-min w-full">
        <div className="h-full overflow-y-auto p-4">
          <form
            onSubmit={handleTenantSubmit}
            method="dialog"
            className="modal-backdrop"
          >
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl text-black">Novo Inquilino</h1>
              <button className="btn btn-sm btn-circle btn-ghost" type="button">
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <label className="label">
                  <span className="label-text">Nome</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Nome"
                  className="input input-bordered w-full"
                  value={form.name}
                  onChange={handleChange}
                />

                <label className="label">
                  <span className="label-text">Telefone</span>
                </label>
                <input
                  id="phone"
                  type="phone"
                  placeholder="Telefone"
                  className="input input-bordered w-full"
                  value={form.phone}
                  onChange={handleChange}
                />
                <label className="label">
                  <span className="label-text">CPF</span>
                </label>
                <input
                  id="cpf"
                  type="text"
                  placeholder="CPF"
                  className="input input-bordered w-full"
                  value={form.cpf}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="label">
                  <span className="label-text">E-mail</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  className="input input-bordered w-full"
                  value={form.email}
                  onChange={handleChange}
                />

                <label className="label">
                  <span className="label-text">Data de Nascimento</span>
                </label>
                <input
                  id="birth"
                  type="date"
                  placeholder="Nascimento"
                  className="input input-bordered w-full"
                  value={form.birth}
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
