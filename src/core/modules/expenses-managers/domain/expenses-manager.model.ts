import { IGenericAttributes } from '../../../shared/domain';

export interface ExpensesManager extends IGenericAttributes {
  name: string;
  code: string;
  address: string;
}
