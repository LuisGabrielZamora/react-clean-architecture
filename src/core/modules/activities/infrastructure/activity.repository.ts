import { Activity } from '../domain';
import { apiConstants } from '../../../constants';
import { BaseRepository } from '../../../shared/infrastructure';

class ActivityRepository extends BaseRepository<Activity> {
  constructor(apiUrl: string) {
    super(apiUrl);
  }
}

export const activityRepository = new ActivityRepository(
  apiConstants.ACTIVITIES
);
