import { IGenericAttributes } from '../../../shared/domain';

export interface Area extends IGenericAttributes {
  name: string;
  code: string;
  address: string;
}
