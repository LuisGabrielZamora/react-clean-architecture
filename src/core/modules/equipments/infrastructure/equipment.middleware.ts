import { apiConstants } from '../../../constants';

import { equipmentRepository } from './equipment.repository';
import { useBaseMiddleware } from '../../../shared/infrastructure';

export const useEquipmentMiddleware = () => {
  const { useGet, useShow, usePost, usePut, useDelete } = useBaseMiddleware(
    apiConstants.EQUIPMENTS,
    equipmentRepository
  );
  return { useGet, useShow, usePost, usePut, useDelete };
};
