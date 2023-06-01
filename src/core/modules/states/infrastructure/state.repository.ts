import { State } from '../domain';
import { apiConstants } from '../../../constants';
import { BaseRepository } from '../../../shared/infrastructure';

class StateRepository extends BaseRepository<State> {
  constructor(apiUrl: string) {
    super(apiUrl);
  }
}

export const stateRepository = new StateRepository(apiConstants.STATES);
