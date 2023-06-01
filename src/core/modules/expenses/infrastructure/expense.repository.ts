import { Expense } from '../domain';
import { apiConstants } from '../../../constants';
import { BaseRepository } from '../../../shared/infrastructure';

class ExpenseRepository extends BaseRepository<Expense> {
  constructor(apiUrl: string) {
    super(apiUrl);
  }
}

export const expenseRepository = new ExpenseRepository(apiConstants.EXPENSES);
