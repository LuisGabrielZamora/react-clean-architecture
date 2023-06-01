import { useQuery } from '@tanstack/react-query';

import { HttpEnum } from './enum/http.enum';
import { BaseRepository } from '../repositories';

const useQueryMiddleware = (cacheName: string, callback: Function) =>
  useQuery([`${cacheName}`], () => callback());

export function useBaseMiddleware<T>(
  cacheName: string,
  repository: BaseRepository<T>
) {
  const useGet = () =>
    useQueryMiddleware(`${HttpEnum.GET}-${cacheName}`, () => repository.get());

  const useShow = (id: string | number) =>
    useQueryMiddleware(`${HttpEnum.SHOW}-${cacheName}`, () =>
      repository.show(id)
    );

  const usePost = (data?: T) =>
    useQueryMiddleware(`${HttpEnum.POST}-${cacheName}`, () =>
      repository.post(data)
    );

  const usePut = (id: string | number, data?: T) =>
    useQueryMiddleware(`${HttpEnum.UPDATE}-${cacheName}`, () =>
      repository.put(id, data)
    );

  const useDelete = (id: string | number) =>
    useQueryMiddleware(`${HttpEnum.DELETE}-${cacheName}`, () =>
      repository.delete(id)
    );

  return { useGet, useShow, usePost, usePut, useDelete };
}
