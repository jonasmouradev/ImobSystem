import { api } from '../../services/api';
import { TenantType, UpdateTenantType } from './types';

const prefix = '/tenant';

// Create Tenant
export function createTenant(params: TenantType) {
  return api.post(`${prefix}/create`, params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Create Tenant');
    }
    return response.data;
  });
}
// Check Tenant Info
export function checkTenantInfo(id): Promise<TenantType> {
  return api.get<TenantType>(`${prefix}/checkInfo/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Check Tenant Info');
    }
    return response.data;
  });
}

// Update Tenant
export function updateTenant(
  id,
  params: UpdateTenantType,
): Promise<TenantType> {
  return api
    .update<TenantType>(`${prefix}/update/${id}`, params)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Failed to Update Tenant');
      }
      return response.data;
    });
}

// Delete Tenant
export function deleteTenant(id) {
  return api.update(`${prefix}/delete/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Delete Tenant');
    }
    return response.data;
  });
}

// Get Tenant List
export function getTenantList(id) {
  return api.get(`${prefix}/checkTenants/${id}/`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Delete House');
    }
    return response.data;
  });
}
