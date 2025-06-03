import React, { useState } from 'react';
import { addToast } from '@/components/Toast/toast';
import { v4 as uuidv4 } from 'uuid';
import { useFormsStore } from '@/store/forms';

export default function FormNewHouse() {
  const addNewHouse = useFormsStore((state) => state.addNewHouse);

  const [form, setForm] = useState({
    address: '',
    rooms: '',
    type: '',
    zipCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleHouseSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { address, rooms, type, zipCode } = form;

    if (!address || !rooms || !type || !zipCode) {
      addToast('Preencha todos os campos', { appearance: 'error' });
      return;
    }

    addNewHouse({
      id: uuidv4(),
      address,
      rooms: Number(rooms),
      ownerId: '', // You can set this if you have an owner selection
      area: undefined, // Add area if needed
    });

    addToast('Cadastro realizado com sucesso', { appearance: 'success' });

    setForm({
      address: '',
      rooms: '',
      type: '',
      zipCode: '',
    });
  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="h-4/5 w-1/2 max-w-4xl p-10 bg-white rounded-xl shadow-lg 2xl:h-min w-full">
        <div className="h-full overflow-y-auto p-4">
          <form
            onSubmit={handleHouseSubmit}
            method="dialog"
            className="modal-backdrop"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="label-text text-2xl font-bold">
                Cadastrar Nova Casa
              </span>
              <button className="btn btn-sm btn-circle btn-ghost" type="button">
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <label className="label">
                  <span className="label-text">Endereço</span>
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Endereço"
                  className="input input-bordered w-full"
                  value={form.address}
                  onChange={handleChange}
                />
                <label className="label">
                  <span className="label-text">Quartos</span>
                </label>
                <input
                  id="rooms"
                  type="number"
                  placeholder="Quartos"
                  className="input input-bordered w-full"
                  value={form.rooms}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="label">
                  <span className="label-text">Tipo</span>
                </label>
                <input
                  id="type"
                  type="text"
                  placeholder="Tipo"
                  className="input input-bordered w-full"
                  value={form.type}
                  onChange={handleChange}
                />
                <label className="label">
                  <span className="label-text">CEP</span>
                </label>
                <input
                  id="zipCode"
                  type="text"
                  placeholder="CEP"
                  className="input input-bordered w-full"
                  value={form.zipCode}
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
