import { IProduct } from '@apis/shop/interfaces';
import { TId } from '@base/interfaces';
import { useAppSelector } from '@lib/redux/hooks';
import { $$, cn } from '@lib/utils';
import { Button, Tag } from 'antd';
import { ClassValue } from 'clsx';
import React, { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa6';

interface IProps {
  className?: ClassValue;
  product: IProduct;
  handleCart: (isCart: boolean, id: TId) => void;
}

const ProductOnSaleCard: React.FC<IProps> = ({ className, product, handleCart }) => {
  const [isCart, setCart] = useState(false);
  const { cart } = useAppSelector((store) => store.cartSlice);

  useEffect(() => {
    const itemIdx = cart.findIndex((item) => item.id === product?._id);
    itemIdx !== -1 ? setCart(true) : setCart(false);
  }, [cart, product?._id]);

  return (
    <div
      className={cn(
        'product_on_sale_card group-[.swiper-slide-active]:bg-gray-300 h-full rounded overflow-hidden',
        className,
      )}
    >
      <div className="bg-white max-w-xs h-full px-10 py-12 group-[.swiper-slide-active]:mx-auto">
        <h3 className="font-bold text-xl">{product?.name}</h3>
        <div className="space-y-2 mb-4">
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
          {product?.discount && <Tag color="warning">Get {product?.discount_percentage}% Off</Tag>}
        </div>
        <Button type="primary" icon={<FaCartPlus />} onClick={() => handleCart(isCart, product?._id)} disabled={isCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductOnSaleCard;
