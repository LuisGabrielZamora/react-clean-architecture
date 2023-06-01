import { IMeta } from './pagination-attributes.interface';

export interface IGetResponse<T> {
  data: Datum<T>[];
  meta: IMeta;
}

export interface Datum<T> {
  id: number;
  attributes: T;
}
