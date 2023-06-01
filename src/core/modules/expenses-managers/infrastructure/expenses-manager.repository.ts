import { ExpensesManager } from '../domain';
import { apiConstants } from '../../../constants';
import { BaseRepository } from '../../../shared/infrastructure';

class ExpensesManagerRepository extends BaseRepository<ExpensesManager> {
  constructor(apiUrl: string) {
    super(apiUrl);
  }
}

export const expensesManagerRepository = new ExpensesManagerRepository(
  apiConstants.EXPENSES_MANAGERS
);
