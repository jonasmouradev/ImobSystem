import { api } from '../../services/api';
import { HouseType, UpdateHouseType } from './types';

// Create House
export function createHouse(params: HouseType) {
  return api.post('/house/create', params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Create House');
    }
    return response.data;
  });
}
// Check House Info
export function checkHouseInfo(id): Promise<HouseType> {
  return api.get<HouseType>(`/house/checkInfo/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Check House Info');
    }
    return response.data;
  });
}

// Update House
export function updateHouse(id, params: UpdateHouseType): Promise<HouseType> {
  return api
    .update<HouseType>(`/house/update/${id}`, params)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Failed to Update House');
      }
      return response.data;
    });
}

// Delete House
export function deleteHouse(id) {
  return api.update(`/house/delete/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Delete House');
    }
    return response.data;
  });
}
