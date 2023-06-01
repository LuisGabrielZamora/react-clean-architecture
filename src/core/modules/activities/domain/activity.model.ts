import { IGenericAttributes } from '../../../shared/domain';

export interface Activity extends IGenericAttributes {
  name: string;
  code: string;
  address: string;
}
