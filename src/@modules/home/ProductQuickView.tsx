import { IProduct } from '@apis/shop/interfaces';
import { $$, cn, imageNotFound } from '@lib/utils';
import { Badge, Tag } from 'antd';
import React from 'react';

interface IProps {
  product: IProduct;
}

const ProductQuickView: React.FC<IProps> = ({ product }) => {
  return (
    <div className="product_quick_view">
      <Badge.Ribbon placement="start" text={product?.seller}>
        <div className="image_container">
          <img
            className="h-auto w-full object-cover rounded-lg"
            src={$$.withStorageUrl(product?.image?.filePath)}
            alt={product?.image?.name}
            onError={imageNotFound}
          />
        </div>
      </Badge.Ribbon>
      <div className="content_wrapper mt-4 space-y-2 text-center">
        <h3 className="text-xl font-semibold line-clamp-1">{product?.name}</h3>
        {product?.discount && <Tag color="warning">Get {product?.discount_percentage}% Off</Tag>}
        <p className="block text-[var(--color-primary)]">
          <span
            className={cn({
              'line-through text-xs mr-1': product?.discount,
            })}
          >
            {$$.withCurrency(product?.price)}
          </span>
          {product?.discount && (
            <span className="font-medium">
              {$$.withCurrency($$.toDiscountPrice(product?.price, product?.discount_percentage))}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductQuickView;
