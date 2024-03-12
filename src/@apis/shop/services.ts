import { IBaseFilter } from '@base/interfaces';
import { baseServices } from '@base/services';
import { IProduct, IProductCreate } from './interfaces';

const END_POINT: string = '/products';
const baseServicesIns = baseServices<IProduct, IBaseFilter, IProductCreate>(END_POINT);

export const ProductsService = {
  ...baseServicesIns,
};
