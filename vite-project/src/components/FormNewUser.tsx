import { createAgreement } from '../services/agreement/requests';
import React, { useState } from 'react';
import { addToast } from '../components/Toast/toast';
import { HouseType } from '../services/house/types';
import { createHouse } from '../services/house/requests';
import { createUser } from '../services/user/requests';
import { Navigate, useNavigate } from 'react-router-dom';

export default function FormNewUser() {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    const age = data.get('age') as unknown as Date;

    if (!name || !email || !password || !age) {
      addToast('Por favor, preencha todos os campos.', { appearance: 'error' });
    } else {
      createUser({ name, email, password, age })
        .then(() => {
          addToast('Usuário criado com sucesso!', { appearance: 'success' });
        })
        .catch((error) => {
          console.error('Error creating user:', error);
        });
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="h-2/3 w-full max-w-4xl p-10 bg-white rounded-xl shadow-lg">
        <div className="h-full overflow-y-auto p-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Cadastro</h1>
            <button
              className="btn btn-sm btn-circle btn-ghost"
              onClick={handleClose}
            >
              ✕
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <label className="label">
                <span className="label-text">Nome</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Nome"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Senha</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Senha"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Data de nascimento</span>
              </label>
              <input
                name="age"
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
