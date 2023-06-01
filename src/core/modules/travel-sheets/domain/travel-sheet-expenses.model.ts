import { IGenericAttributes } from '../../../shared/domain';

export interface TravelSheetExpenses extends IGenericAttributes {
  user: string;
  expenses: string;
  datedAt: Date | string;
  status: string;
}
