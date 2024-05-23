import { api } from '../../services/api';
import { AgreementType, UpdateAgreementType } from './types';

// Create Agreement
export function createAgreement(params: AgreementType) {
  return api.post('/agreement/create', params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Create Agreement');
    }
    return response.data;
  });
}
// Check Agreement Info
export function checkAgreementInfo(id): Promise<AgreementType> {
  return api
    .get<AgreementType>(`/agreement/checkInfo/${id}`)
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
    .update<AgreementType>(`/agreement/update/${id}`, params)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Failed to Update Agreement');
      }
      return response.data;
    });
}

// Delete Agreement
export function deleteAgreement(id) {
  return api.update(`/agreement/delete/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Delete Agreement');
    }
    return response.data;
  });
}

// Get Active Agreement List
export function getActiveAgreementList(id) {
  return api.get(`/checkActiveAgreements/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Delete Agreement');
    }
    return response.data;
  });
}

// Get Inactive Agreement List
export function getInactiveAgreementList(id) {
  return api.get(`/checkInactiveAgreements/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Delete Agreement');
    }
    return response.data;
  });
}
