import { Equipment } from '../domain';
import { apiConstants } from '../../../constants';
import { BaseRepository } from '../../../shared/infrastructure';

class EquipmentRepository extends BaseRepository<Equipment> {
  constructor(apiUrl: string) {
    super(apiUrl);
  }
}

export const equipmentRepository = new EquipmentRepository(
  apiConstants.EQUIPMENTS
);
