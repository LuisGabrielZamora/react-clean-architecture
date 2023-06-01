import { apiConstants } from '../../../constants';

import { stateRepository } from './state.repository';
import { useBaseMiddleware } from '../../../shared/infrastructure';

export const useStateMiddleware = () => {
  const { useGet, useShow, usePost, usePut, useDelete } = useBaseMiddleware(
    apiConstants.STATES,
    stateRepository
  );
  return { useGet, useShow, usePost, usePut, useDelete };
};
