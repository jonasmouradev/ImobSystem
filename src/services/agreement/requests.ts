import { api } from '../api';
import { AgreementType, UpdateAgreementType } from './types';

const prefix = '/agreement';

// Create Agreement
export function createAgreement(params: AgreementType) {
  return api.post(`${prefix}/create`, params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Create Agreement');
    }
    return response.data;
  });
}
// Check Agreement Info
export function checkAgreementInfo(id): Promise<AgreementType> {
  return api
    .get<AgreementType>(`${prefix}/checkInfo/${id}`)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Failed to Check Agreement Info');
      }
      return response.data;
    });
}

// Update Agreement
export function updateAgreement(
  id,
  params: UpdateAgreementType,
): Promise<AgreementType> {
  return api
    .put<AgreementType>(`${prefix}/update/${id}`, params)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Failed to Update Agreement');
      }
      return response.data;
    });
}

// Delete Agreement
export function deleteAgreement(id) {
  return api.delete(`${prefix}/delete/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Delete Agreement');
    }
    return response.data;
  });
}

// Get Active Agreement List
export function getActiveAgreementList(id) {
  return api.get(`${prefix}/checkActiveAgreements/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Delete Agreement');
    }
    return response.data;
  });
}

// Get Inactive Agreement List
export function getInactiveAgreementList(id) {
  return api.get(`${prefix}/checkInactiveAgreements/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Delete Agreement');
    }
    return response.data;
  });
}
