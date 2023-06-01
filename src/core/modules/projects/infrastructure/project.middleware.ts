import { apiConstants } from '../../../constants';

import { projectRepository } from './project.repository';
import { useBaseMiddleware } from '../../../shared/infrastructure';

export const useProjectMiddleware = () => {
  const { useGet, useShow, usePost, usePut, useDelete } = useBaseMiddleware(
    apiConstants.PROJECTS,
    projectRepository
  );
  return { useGet, useShow, usePost, usePut, useDelete };
};
