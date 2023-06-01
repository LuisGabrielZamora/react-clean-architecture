import { Area } from '../domain';
import { apiConstants } from '../../../constants';
import { BaseRepository } from '../../../shared/infrastructure';

class AreaRepository extends BaseRepository<Area> {
  constructor(apiUrl: string) {
    super(apiUrl);
  }
}

export const areaRepository = new AreaRepository(apiConstants.AREAS);
