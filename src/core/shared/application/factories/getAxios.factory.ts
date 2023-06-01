import { AxiosError, AxiosResponse } from 'axios';
import { IAxiosResponse, IGetResponse } from '../../domain';

export function getAxiosFactory<T>(
  response: AxiosResponse<any, any> | AxiosError<any, any> | undefined
): IAxiosResponse<T> {
  if (!response) {
    return {
      data: null,
      status: 500,
      statusText: '',
    };
  }

  const axiosError = response as AxiosError<T>;
  if (axiosError.isAxiosError) {
    return {
      data: null,
      status: axiosError.status,
      statusText: axiosError.code,
    };
  }

  const axiosResponse = response as AxiosResponse<T>;
  return {
    data: axiosResponse.data as IGetResponse<T>,
    status: axiosResponse.status,
    statusText: axiosResponse.statusText,
  };
}
