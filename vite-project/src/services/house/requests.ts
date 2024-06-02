import { api } from '../../services/api';
import { HouseType, UpdateHouseType } from './types';

const prefix = '/house';

// Create House
export function createHouse(params: HouseType) {
  return api.post(`${prefix}/create`, params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Create House');
    }
    return response.data;
  });
}
// Check House Info
export function checkHouseInfo(id): Promise<HouseType> {
  return api.get<HouseType>(`${prefix}/checkInfo/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Check House Info');
    }
    return response.data;
  });
}

// Update House
export function updateHouse(id, params: UpdateHouseType): Promise<HouseType> {
  return api
    .put<HouseType>(`${prefix}/update/${id}`, params)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Failed to Update House');
      }
      return response.data;
    });
}

// Delete House
export function deleteHouse(id) {
  return api.delete(`${prefix}/delete/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Delete House');
    }
    return response.data;
  });
}

// Get House List
export function getHousetList(id) {
  return api.get(`${prefix}/checkHouses/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Delete House');
    }
    return response.data;
  });
}
