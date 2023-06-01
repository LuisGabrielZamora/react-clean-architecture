import { TravelSheet } from '../domain';
import { apiConstants } from '../../../constants';
import { BaseRepository } from '../../../shared/infrastructure';

class TravelSheetRepository extends BaseRepository<TravelSheet> {
  constructor(apiUrl: string) {
    super(apiUrl);
  }
}

export const travelSheetRepository = new TravelSheetRepository(
  apiConstants.TRAVEL_SHEETS
);
