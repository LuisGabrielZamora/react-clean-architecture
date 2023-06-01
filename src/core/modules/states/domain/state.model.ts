import { IGenericAttributes } from '../../../shared/domain';

export interface State extends IGenericAttributes {
  name: string;
  code: string;
  address: string;
}
