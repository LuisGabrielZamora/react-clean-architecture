import { AxiosError, AxiosResponse } from 'axios';

import {
  IDeleteRepository,
  IGetRepository,
  IPostRepository,
  IShowRepository,
  IUpdateRepository,
} from '../../domain';
import { axiosInstance } from '../handlers';

export abstract class BaseRepository<T>
  implements
    IGetRepository<T>,
    IShowRepository<T>,
    IPostRepository<T>,
    IUpdateRepository<T>,
    IDeleteRepository<T>
{
  protected constructor(private readonly apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async get(): Promise<AxiosResponse<T> | AxiosError> {
    return await axiosInstance.get(this.apiUrl);
  }

  async show(id: string | number): Promise<AxiosResponse<T>> {
    return await axiosInstance.get(`${this.apiUrl}/${id}`);
  }

  async post(data?: T): Promise<AxiosResponse<T>> {
    return await axiosInstance.post(`${this.apiUrl}`, data);
  }

  async put(id: string | number, data?: T): Promise<AxiosResponse<T>> {
    return await axiosInstance.put(`${this.apiUrl}/${id}`, data);
  }

  async delete(id: string | number): Promise<AxiosResponse<T>> {
    return await axiosInstance.delete(`${this.apiUrl}/${id}`);
  }
}
