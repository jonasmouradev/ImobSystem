import { api } from '../../services/api';
import { UpdateUserType, UserType } from './types';

// Create User
export function createUser(params: UserType) {
  return api.post('/user/create', params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Create User');
    }
    return response.data;
  });
}
// Check User Info
export function checkUserInfo(id): Promise<UserType> {
  return api.get<UserType>(`/user/checkInfo/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Check User Info');
    }
    return response.data;
  });
}

// Update User
export function updateUser(id, params: UpdateUserType): Promise<UserType> {
  return api.update<UserType>(`/user/update/${id}`, params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Update User');
    }
    return response.data;
  });
}

// Delete User
export function deleteUser(id) {
  return api.update(`/user/delete/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to Delete User');
    }
    return response.data;
  });
}
