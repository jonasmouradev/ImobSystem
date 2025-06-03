import { create } from 'zustand';

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
}

interface UsersState {
  users: User[];
  addUser: (user: User) => void;
  removeUser: (id: string) => void;
  setUsers: (users: User[]) => void;
  findUserByCredentials: (email: string) => User | undefined;
  clearUsers: () => void;
}

export const useUsersStore = create<UsersState>((set, get) => ({
  users: [],
  addUser: (user) =>
    set((state) => ({
      users: [...state.users, user],
    })),
  removeUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
  setUsers: (users) => set({ users }),
  findUserByCredentials: (email) =>
    get().users.find((user) => user.email === email),
  clearUsers: () => set({ users: [] }),
}));
