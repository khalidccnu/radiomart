import { IProduct } from '@apis/shop/interfaces';
import { $$, cn, imageNotFound } from '@lib/utils';
import { ClassValue } from 'clsx';
import React from 'react';
import { BsBasket2, BsHeart } from 'react-icons/bs';

interface IProps {
  className?: ClassValue;
  product: IProduct;
}

const ProductCard: React.FC<IProps> = ({ className, product }) => {
  return (
    <div className={cn('product_card', className)}>
      <div className="image_container">
        <span className="discount_badge">Get {product?.discount_percentage}% Off</span>
        <div className="btn_container">
          <span className="wish_icon">
            <BsHeart size={20} />
          </span>
          <span className="cart_icon">
            <BsBasket2 size={20} />
          </span>
        </div>
        <p className="quick_view">Quick View</p>
        <img src={$$.withStorageUrl(product?.image?.filePath)} alt={product?.image?.name} onError={imageNotFound} />
      </div>
      <div className="content_wrapper">
        <h5 className="title">{product?.name}</h5>
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
