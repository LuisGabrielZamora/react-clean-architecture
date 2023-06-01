import { IGetResponse } from './get-response.interface';

export interface IAxiosResponse<T> {
  data: IGetResponse<T> | null;
  status?: number;
  statusText?: string;
  error?: IAxiosErrorResponse;
}

export interface IAxiosErrorResponse {
  details: any;
  message: string;
  name: string;
  status: number;
}
