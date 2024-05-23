import { api } from '../../services/api';
import { OwnerType, UpdateOwnerType } from './types';

// Create House
export function createHouse(params: OwnerType) {
  return api.post('/owner/create', params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Create House');
    }
    return response.data;
  });
}
// Check House Info
export function checkHouseInfo(id): Promise<OwnerType> {
  return api.get<OwnerType>(`/owner/checkInfo/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Check House Info');
    }
    return response.data;
  });
}

// Update House
export function updateHouse(id, params: UpdateOwnerType): Promise<OwnerType> {
  return api
    .update<OwnerType>(`/owner/update/${id}`, params)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Failed to Update House');
      }
      return response.data;
    });
}

// Delete House
export function deleteHouse(id) {
  return api.update(`/owner/delete/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Delete House');
    }
    return response.data;
  });
}

// Get Owner List
export function getOwnerList(id) {
  return api.get(`/checkOwners/user/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Delete Owner');
    }
    return response.data;
  });
}
