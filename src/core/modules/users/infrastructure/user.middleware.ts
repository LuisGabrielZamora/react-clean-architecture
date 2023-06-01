import { apiConstants } from '../../../constants';

import { userRepository } from './user.repository';
import { useBaseMiddleware } from '../../../shared/infrastructure';

export const useUserMiddleware = () => {
  const { useGet, useShow, usePost, usePut, useDelete } = useBaseMiddleware(
    apiConstants.USERS,
    userRepository
  );
  return { useGet, useShow, usePost, usePut, useDelete };
};
