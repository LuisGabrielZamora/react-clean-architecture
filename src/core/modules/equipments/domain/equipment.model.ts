import { IGenericAttributes } from '../../../shared/domain';

export interface Equipment extends IGenericAttributes {
  name: string;
  code: string;
  address: string;
}
