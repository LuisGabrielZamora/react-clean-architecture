import { apiConstants } from '../../../constants';

import { areaRepository } from './area.repository';
import { useBaseMiddleware } from '../../../shared/infrastructure';

export const useAreaMiddleware = () => {
  const { useGet, useShow, usePost, usePut, useDelete } = useBaseMiddleware(
    apiConstants.AREAS,
    areaRepository
  );
  return { useGet, useShow, usePost, usePut, useDelete };
};
