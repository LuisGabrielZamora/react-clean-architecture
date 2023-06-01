import { apiConstants } from '../../../constants';

import { hospitalRepository } from './hospital.repository';
import { useBaseMiddleware } from '../../../shared/infrastructure';

export const useHospitalMiddleware = () => {
  const { useGet, useShow, usePost, usePut, useDelete } = useBaseMiddleware(
    apiConstants.HOSPITALS,
    hospitalRepository
  );
  return { useGet, useShow, usePost, usePut, useDelete };
};
