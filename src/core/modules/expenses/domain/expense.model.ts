import { IGenericAttributes } from '../../../shared/domain';

export interface Expense extends IGenericAttributes {
  name: string;
  code: string;
  address: string;
}
