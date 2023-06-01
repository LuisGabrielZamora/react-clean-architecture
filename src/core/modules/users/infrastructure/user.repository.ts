import { User } from '../domain';
import { apiConstants } from '../../../constants';
import { BaseRepository } from '../../../shared/infrastructure';

class UserRepository extends BaseRepository<User> {
  constructor(apiUrl: string) {
    super(apiUrl);
  }
}

export const userRepository = new UserRepository(apiConstants.USERS);
