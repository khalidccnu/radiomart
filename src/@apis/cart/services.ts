import { IProductsResponse } from '@apis/shop/interfaces';
import { IBaseFilter, TId } from '@base/interfaces';
import { AxiosInstance } from '@lib/config';
import { $$, responseHandler } from '@lib/utils';
import { AxiosError } from 'axios';

const END_POINT: string = '/products';

export const CartService = {
  NAME: END_POINT,

  bulkFind: async (payload: TId[], options: IBaseFilter): Promise<IProductsResponse> => {
    try {
      const res = await AxiosInstance.post(`${END_POINT}?${$$.queryNormalizer(options)}`, payload);
      return Promise.resolve(res?.data);
    } catch (error) {
      throw responseHandler(error as AxiosError);
    }
  },
};
