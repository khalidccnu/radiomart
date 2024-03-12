import { IProduct } from '@apis/shop/interfaces';
import { $$, cn, imageNotFound } from '@lib/utils';
import React from 'react';

interface IProps {
  product: IProduct;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <div className="product_card">
      <div className="image_container">
        <img src={$$.withStorageUrl(product?.image?.filePath)} alt={product?.image?.name} onError={imageNotFound} />
      </div>
      <div className="content_wrapper">
        <h3 className="title">{product?.name}</h3>
        <p className="price">
          <span
            className={cn('regular', {
              'line-through': product?.discount,
            })}
          >
            {$$.withCurrency(product?.price)}
          </span>
          {product?.discount && (
            <span className="discount">
              {$$.withCurrency($$.toDiscountPrice(product?.price, product?.discount_percentage))}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
