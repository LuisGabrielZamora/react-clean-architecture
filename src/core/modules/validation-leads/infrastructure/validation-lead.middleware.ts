import { apiConstants } from '../../../constants';
import { useBaseMiddleware } from '../../../shared/infrastructure';
import { validationLeadRepository } from './validation-lead.repository';

export const useValidationLeadMiddleware = () => {
  const { useGet, useShow, usePost, usePut, useDelete } = useBaseMiddleware(
    apiConstants.VALIDATION_LEADS,
    validationLeadRepository
  );
  return { useGet, useShow, usePost, usePut, useDelete };
};
