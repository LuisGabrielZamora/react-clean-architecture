import { apiConstants } from '../../../constants';

import { expenseRepository } from './expense.repository';
import { useBaseMiddleware } from '../../../shared/infrastructure';

export const useExpenseMiddleware = () => {
  const { useGet, useShow, usePost, usePut, useDelete } = useBaseMiddleware(
    apiConstants.EXPENSES,
    expenseRepository
  );
  return { useGet, useShow, usePost, usePut, useDelete };
};
