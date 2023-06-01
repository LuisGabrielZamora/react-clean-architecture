import { ValidationLead } from '../domain';
import { apiConstants } from '../../../constants';
import { BaseRepository } from '../../../shared/infrastructure';

class ValidationLeadRepository extends BaseRepository<ValidationLead> {
  constructor(apiUrl: string) {
    super(apiUrl);
  }
}

export const validationLeadRepository = new ValidationLeadRepository(
  apiConstants.VALIDATION_LEADS
);
