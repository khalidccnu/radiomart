export type TId = string | number;

export interface IImageResponse {
  fileId: TId;
  name: string;
  fileType: string;
  mime: string;
  filePath: string;
  url: string;
  thumbnail: string;
}

export interface IMetaResponse {
  total: number;
  page: number;
  limit: number;
  skip: number;
}

export interface IBaseResponse<D = any> {
  success: boolean;
  statusCode: number;
  message: string;
  meta: IMetaResponse;
  data: D;
}

export interface IBaseEntity {
  _id: TId;
  createdAt: string;
}

export interface IBaseFilter {
  searchTerm?: string;
  page?: number;
  limit?: number;
  sort?: {
    type: 'asc' | 'desc';
    by: string;
  };
}

export interface IBaseServices<Entity = any, FilterOptions = any, CreatePayload = any, UpdatePayload = CreatePayload> {
  END_POINT: string;
  findById(id: TId): Promise<IBaseResponse<Entity>>;
  find(options: FilterOptions): Promise<IBaseResponse<Entity[]>>;
  create(payload: CreatePayload): Promise<IBaseResponse<Entity>>;
  update(payload: { id: TId; data: Partial<UpdatePayload> }): Promise<IBaseResponse<Entity>>;
  delete(id: TId): Promise<IBaseResponse<Entity>>;
}
