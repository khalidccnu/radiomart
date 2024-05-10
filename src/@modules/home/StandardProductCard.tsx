import { IProduct } from '@apis/shop/interfaces';
import BaseModal from '@base/components/BaseModal';
import { TId } from '@base/interfaces';
import { useAppSelector } from '@lib/redux/hooks';
import { $$, cn, imageNotFound } from '@lib/utils';
import { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { BsBasket2, BsFillBasket2Fill, BsHeart, BsHeartFill } from 'react-icons/bs';
import ProductQuickView from './ProductQuickView';

interface IProps {
  idx: number;
  className?: ClassValue;
  product: IProduct;
  handleFavorite: (isFavorite: boolean, id: TId) => void;
  handleCart: (isCart: boolean, id: TId) => void;
}

const StandardProductCard: React.FC<IProps> = ({ idx, className, product, handleFavorite, handleCart }) => {
  const [isFavorite, setFavorite] = useState(false);
  const [isCart, setCart] = useState(false);
  const { favorite } = useAppSelector((store) => store.favoriteSlice);
  const { cart } = useAppSelector((store) => store.cartSlice);

  useEffect(() => {
    const itemIdx = favorite.findIndex((item) => item.id === product?._id);
    itemIdx !== -1 ? setFavorite(true) : setFavorite(false);
  }, [favorite, product?._id]);

  useEffect(() => {
    const itemIdx = cart.findIndex((item) => item.id === product?._id);
    itemIdx !== -1 ? setCart(true) : setCart(false);
  }, [cart, product?._id]);

  return (
    <motion.div
      className={cn('product_card', className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: idx * 0.1,
      }}
      viewport={{ once: true }}
    >
      <div className="image_container">
        {product?.discount && <span className="discount_badge">Get {product?.discount_percentage}% Off</span>}
        <div className="btn_container">
          <button type="button" className="wish_icon" onClick={() => handleFavorite(isFavorite, product?._id)}>
            {isFavorite ? <BsHeartFill size={20} /> : <BsHeart size={20} />}
          </button>
          <button type="button" className="cart_icon" onClick={() => handleCart(isCart, product?._id)}>
            {isCart ? <BsFillBasket2Fill size={20} /> : <BsBasket2 size={20} />}
          </button>
        </div>
        <BaseModal
          width={520}
          clickerElement={
            <button type="button" className="quick_view">
              Quick View
            </button>
          }
        >
          <ProductQuickView product={product} />
        </BaseModal>
        <img src={$$.withStorageUrl(product?.image?.filePath)} alt={product?.image?.name} onError={imageNotFound} />
      </div>
      <div className="content_wrapper">
        <h5 className="title">{product?.name}</h5>
        <p className="price">
          <span
            className={cn('regular', {
              'line-through mr-1': product?.discount,
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
    </motion.div>
  );
};

export default StandardProductCard;
