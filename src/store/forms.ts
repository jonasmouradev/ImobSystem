import { create } from 'zustand';

interface NewContractForm {
  id: string;
  propertyId?: string;
  tenantId?: string;
  startDate?: string;
  endDate?: string;
  value?: number;
}

interface NewHouseForm {
  id: string;
  address?: string;
  ownerId?: string;
  rooms?: number;
  area?: number;
}

interface NewOwnerForm {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
}

interface NewTenantForm {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
}

interface FormsState {
  newContracts: NewContractForm[];
  addNewContract: (data: NewContractForm) => void;
  updateNewContract: (id: string, data: Partial<NewContractForm>) => void;
  removeNewContract: (id: string) => void;

  newHouses: NewHouseForm[];
  addNewHouse: (data: NewHouseForm) => void;
  updateNewHouse: (id: string, data: Partial<NewHouseForm>) => void;
  removeNewHouse: (id: string) => void;

  newOwners: NewOwnerForm[];
  addNewOwner: (data: NewOwnerForm) => void;
  updateNewOwner: (id: string, data: Partial<NewOwnerForm>) => void;
  removeNewOwner: (id: string) => void;

  newTenants: NewTenantForm[];
  addNewTenant: (data: NewTenantForm) => void;
  updateNewTenant: (id: string, data: Partial<NewTenantForm>) => void;
  removeNewTenant: (id: string) => void;
}

export const useFormsStore = create<FormsState>((set) => ({
  newContracts: [],
  addNewContract: (data) =>
    set((state) => ({
      newContracts: [...state.newContracts, data],
    })),
  updateNewContract: (id, data) =>
    set((state) => ({
      newContracts: state.newContracts.map((item) =>
        item.id === id ? { ...item, ...data } : item,
      ),
    })),
  removeNewContract: (id) =>
    set((state) => ({
      newContracts: state.newContracts.filter((item) => item.id !== id),
    })),

  newHouses: [],
  addNewHouse: (data) =>
    set((state) => ({
      newHouses: [...state.newHouses, data],
    })),
  updateNewHouse: (id, data) =>
    set((state) => ({
      newHouses: state.newHouses.map((item) =>
        item.id === id ? { ...item, ...data } : item,
      ),
    })),
  removeNewHouse: (id) =>
    set((state) => ({
      newHouses: state.newHouses.filter((item) => item.id !== id),
    })),

  newOwners: [],
  addNewOwner: (data) =>
    set((state) => ({
      newOwners: [...state.newOwners, data],
    })),
  updateNewOwner: (id, data) =>
    set((state) => ({
      newOwners: state.newOwners.map((item) =>
        item.id === id ? { ...item, ...data } : item,
      ),
    })),
  removeNewOwner: (id) =>
    set((state) => ({
      newOwners: state.newOwners.filter((item) => item.id !== id),
    })),

  newTenants: [],
  addNewTenant: (data) =>
    set((state) => ({
      newTenants: [...state.newTenants, data],
    })),
  updateNewTenant: (id, data) =>
    set((state) => ({
      newTenants: state.newTenants.map((item) =>
        item.id === id ? { ...item, ...data } : item,
      ),
    })),
  removeNewTenant: (id) =>
    set((state) => ({
      newTenants: state.newTenants.filter((item) => item.id !== id),
    })),
}));
