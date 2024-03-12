import { UseBaseHooks } from '@base/hooks';
import { ProductsService } from './services';

export const ProductsHook = {
  ...UseBaseHooks(ProductsService),
};
