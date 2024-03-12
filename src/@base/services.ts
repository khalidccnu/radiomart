import { IBaseResponse, TId } from '@base/interfaces';
import { AxiosInstance } from '@lib/config';
import { $$, responseHandler } from '@lib/utils';
import { AxiosError } from 'axios';
import { IBaseServices } from './interfaces';

export const baseServices = <Entity, FilterOptions, CreatePayload, UpdatePayload = CreatePayload>(
  END_POINT: string,
): IBaseServices<Entity, FilterOptions, CreatePayload, UpdatePayload> => {
  const findById = async (id: TId): Promise<IBaseResponse<Entity>> => {
    try {
      if (!id) return { data: null } as any;

      const res = await AxiosInstance.get(`${END_POINT}/${id}`);
      return Promise.resolve(res?.data);
    } catch (error) {
      throw responseHandler(error as AxiosError);
    }
  };

  const find = async (options: FilterOptions): Promise<IBaseResponse<Entity[]>> => {
    try {
      const res = await AxiosInstance.get(`${END_POINT}?${$$.queryNormalizer(options)}`);
      return Promise.resolve(res?.data);
    } catch (error) {
      throw responseHandler(error as AxiosError);
    }
  };

  const create = async (payload: CreatePayload): Promise<IBaseResponse<Entity>> => {
    try {
      const res = await AxiosInstance.post(END_POINT, payload);
      return Promise.resolve(res?.data);
    } catch (error) {
      throw responseHandler(error as AxiosError);
    }
  };

  const update = async (payload: { id: TId; data: Partial<UpdatePayload> }): Promise<IBaseResponse<Entity>> => {
    try {
      const res = await AxiosInstance.patch(`${END_POINT}/${payload.id}`, payload.data);
      return Promise.resolve(res?.data);
    } catch (error) {
      throw responseHandler(error as AxiosError);
    }
  };

  const del = async (id: TId): Promise<IBaseResponse<Entity>> => {
    try {
      const res = await AxiosInstance.delete(`${END_POINT}/${id}`);
      return Promise.resolve(res?.data);
    } catch (error) {
      throw responseHandler(error as AxiosError);
    }
  };

  return { END_POINT, findById, find, create, update, delete: del };
};
