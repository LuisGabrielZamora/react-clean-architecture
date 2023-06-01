import { IGenericAttributes } from '../../../shared/domain';

export interface Project extends IGenericAttributes {
  name: string;
  code: string;
  address: string;
}
