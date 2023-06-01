import { AxiosError, AxiosResponse } from 'axios';
import {
  QueryObserverLoadingErrorResult,
  QueryObserverLoadingResult,
  QueryObserverRefetchErrorResult,
  QueryObserverSuccessResult,
} from '@tanstack/react-query';

export interface IGetMiddleware<T> {
  useGetMiddleware():
    | QueryObserverRefetchErrorResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >
    | QueryObserverSuccessResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >
    | QueryObserverLoadingErrorResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >
    | QueryObserverLoadingResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >;
}

export interface IShowMiddleware<T> {
  useShowMiddleware():
    | QueryObserverRefetchErrorResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >
    | QueryObserverSuccessResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >
    | QueryObserverLoadingErrorResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >
    | QueryObserverLoadingResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >;
}

export interface IPostMiddleware<T> {
  usePostMiddleware():
    | QueryObserverRefetchErrorResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >
    | QueryObserverSuccessResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >
    | QueryObserverLoadingErrorResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >
    | QueryObserverLoadingResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >;
}

export interface IUpdateMiddleware<T> {
  useUpdateMiddleware():
    | QueryObserverRefetchErrorResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >
    | QueryObserverSuccessResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >
    | QueryObserverLoadingErrorResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >
    | QueryObserverLoadingResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >;
}

export interface IDeleteMiddleware<T> {
  useDeleteMiddleware():
    | QueryObserverRefetchErrorResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >
    | QueryObserverSuccessResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >
    | QueryObserverLoadingErrorResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >
    | QueryObserverLoadingResult<
        AxiosResponse<T> | AxiosError<unknown, any>,
        unknown
      >;
}
