import { AxiosError, AxiosResponse } from 'axios';

export interface IGetRepository<T> {
  get(): Promise<AxiosResponse<T> | AxiosError>;
}

export interface IShowRepository<T> {
  show(id: string | number): Promise<AxiosResponse<T> | AxiosError>;
}

export interface IPostRepository<T> {
  post(data?: T): Promise<AxiosResponse<T>>;
}

export interface IUpdateRepository<T> {
  put(id: string | number, data?: T): Promise<AxiosResponse<T>>;
}

export interface IDeleteRepository<T> {
  delete(id: string | number): Promise<AxiosResponse<T>>;
}
