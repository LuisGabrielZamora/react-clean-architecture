import { apiConstants } from '../../../constants';

import { expensesManagerRepository } from './expenses-manager.repository';
import { useBaseMiddleware } from '../../../shared/infrastructure';

export const useExpensesManagerMiddleware = () => {
  const { useGet, useShow, usePost, usePut, useDelete } = useBaseMiddleware(
    apiConstants.EXPENSES_MANAGERS,
    expensesManagerRepository
  );
  return { useGet, useShow, usePost, usePut, useDelete };
};
