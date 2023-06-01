import { IGenericAttributes } from '../../../shared/domain';

export interface ValidationLead extends IGenericAttributes {
  name: string;
  code: string;
  address: string;
}
