import { apiConstants } from '../../../constants';

import { activityRepository } from './activity.repository';
import { useBaseMiddleware } from '../../../shared/infrastructure';

export const useActivityMiddleware = () => {
  const { useGet, useShow, usePost, usePut, useDelete } = useBaseMiddleware(
    apiConstants.ACTIVITIES,
    activityRepository
  );
  return { useGet, useShow, usePost, usePut, useDelete };
};
