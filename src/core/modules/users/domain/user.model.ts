import { IGenericAttributes } from '../../../shared/domain';

export interface User extends IGenericAttributes {
  name: string;
  code: string;
  address: string;
}
