import { Project } from '../domain';
import { apiConstants } from '../../../constants';
import { BaseRepository } from '../../../shared/infrastructure';

class ProjectRepository extends BaseRepository<Project> {
  constructor(apiUrl: string) {
    super(apiUrl);
  }
}

export const projectRepository = new ProjectRepository(apiConstants.PROJECTS);
