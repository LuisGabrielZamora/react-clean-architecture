import { IGenericAttributes } from '../../../shared/domain';

export interface Hospital extends IGenericAttributes {
  name: string;
  code: string;
  address: string;
}
