import { Hospital } from '../domain';
import { apiConstants } from '../../../constants';
import { BaseRepository } from '../../../shared/infrastructure';

class HospitalRepository extends BaseRepository<Hospital> {
  constructor(apiUrl: string) {
    super(apiUrl);
  }
}

export const hospitalRepository = new HospitalRepository(
  apiConstants.HOSPITALS
);
