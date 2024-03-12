import { IBaseEntity, IBaseResponse, IImageResponse, TId } from '@base/interfaces';

export interface IProduct extends IBaseEntity {
  category_id: TId;
  name: string;
  price: number;
  stock: number;
  sell: number;
  seller: string;
  image: IImageResponse;
  featured: boolean;
  trending: boolean;
  discount: boolean;
  discount_percentage: number;
}

export interface IProductCreate {
  category_id: TId;
  name: string;
  price: number;
  stock: number;
  seller: string;
  image: string;
  featured: boolean;
  trending: boolean;
  discount: boolean;
  discount_percentage: number;
}

export interface IProductsResponse extends IBaseResponse {
  data: IProduct[];
}
