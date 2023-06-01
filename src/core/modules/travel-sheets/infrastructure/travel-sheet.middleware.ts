import { apiConstants } from '../../../constants';

import { travelSheetRepository } from './travel-sheet.repository';
import { useBaseMiddleware } from '../../../shared/infrastructure';

export const useTravelSheetMiddleware = () => {
  const { useGet, useShow, usePost, usePut, useDelete } = useBaseMiddleware(
    apiConstants.TRAVEL_SHEETS,
    travelSheetRepository
  );
  return { useGet, useShow, usePost, usePut, useDelete };
};
