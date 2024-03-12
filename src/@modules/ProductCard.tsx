import { IProduct } from '@apis/shop/interfaces';
import { TId } from '@base/interfaces';
import { useAppSelector } from '@lib/redux/hooks';
import { $$, cn, imageNotFound } from '@lib/utils';
import { ClassValue } from 'clsx';
import React, { useEffect, useState } from 'react';
import { BsBasket2, BsFillBasket2Fill, BsHeart } from 'react-icons/bs';

interface IProps {
  className?: ClassValue;
  product: IProduct;
  handleCart: (isCart: boolean, id: TId) => void;
}

const ProductCard: React.FC<IProps> = ({ className, product, handleCart }) => {
  const [isCart, setCart] = useState(false);
  const { cart } = useAppSelector((store) => store.cartSlice);

  useEffect(() => {
    const itemIdx = cart.findIndex((item) => item.id === product?._id);
    itemIdx !== -1 ? setCart(true) : setCart(false);
  }, [cart, product?._id]);

  return (
    <div className={cn('product_card', className)}>
      <div className="image_container">
        {product?.discount && <span className="discount_badge">Get {product?.discount_percentage}% Off</span>}
        <div className="btn_container">
          <button type="button" className="wish_icon">
            <BsHeart size={20} />
          </button>
          <button type="button" className="cart_icon" onClick={() => handleCart(isCart, product?._id)}>
            {isCart ? <BsFillBasket2Fill size={20} /> : <BsBasket2 size={20} />}
          </button>
        </div>
        <button type="button" className="quick_view">
          Quick View
        </button>
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
