import { IProduct } from '@apis/shop/interfaces';
import { TId } from '@base/interfaces';
import { useAppSelector } from '@lib/redux/hooks';
import { $$, cn, imageNotFound } from '@lib/utils';
import { Button } from 'antd';
import { ClassValue } from 'clsx';
import React, { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa6';

interface IProps {
  className?: ClassValue;
  product: IProduct;
  handleCart: (isCart: boolean, id: TId) => void;
}

const RecommendedProductCard: React.FC<IProps> = ({ className, product, handleCart }) => {
  const [isCart, setCart] = useState(false);
  const { cart } = useAppSelector((store) => store.cartSlice);

  useEffect(() => {
    const itemIdx = cart.findIndex((item) => item.id === product?._id);
    itemIdx !== -1 ? setCart(true) : setCart(false);
  }, [cart, product?._id]);

  return (
    <div className={cn('recommended_product_card', className)}>
      <div className="w-full h-96">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={$$.withStorageUrl(product?.image?.filePath)}
          alt={product?.image?.name}
          onError={imageNotFound}
        />
      </div>
      <div className="hidden group-[.swiper-slide-active]:block px-3 mt-5 text-center space-y-1">
        <h3 className="font-semibold line-clamp-1">{product?.name}</h3>
        <p className="block text-[var(--color-primary)]">
          <span
            className={cn({
              'line-through text-xs': product?.discount,
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
        <Button type="primary" icon={<FaCartPlus />} onClick={() => handleCart(isCart, product?._id)} disabled={isCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default RecommendedProductCard;
