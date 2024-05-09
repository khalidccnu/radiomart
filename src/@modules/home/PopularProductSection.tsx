import { IProduct } from '@apis/shop/interfaces';
import { TId } from '@base/interfaces';
import { messages } from '@lib/constant';
import { addCart, removeCart } from '@lib/redux/cart/cartSlice';
import { useAppDispatch } from '@lib/redux/hooks';
import { cn } from '@lib/utils';
import { message } from 'antd';
import { ClassValue } from 'clsx';
import React from 'react';
import StandardProductCard from './StandardProductCard';

interface IProps {
  className?: ClassValue;
  data: IProduct[];
}

const PopularProductSection: React.FC<IProps> = ({ className, data }) => {
  const dispatch = useAppDispatch();
  const [messageApi, messageHolder] = message.useMessage();

  const handleCart = (isCart: boolean, id: TId) => {
    const short = true;

    if (isCart) {
      dispatch(removeCart({ short, id }));
      messageApi.success(messages.cart.remove);
    } else {
      dispatch(addCart({ short, id }));
      messageApi.success(messages.cart.add);
    }
  };

  return (
    <section className={cn('popular_product_section', className)}>
      {messageHolder}
      <div className="container">
        <h2 className="section_title">Most Popular Products</h2>
        <div className="wrapper">
          {data?.map((elem, idx) => (
            <StandardProductCard key={elem?._id} idx={idx} product={elem} handleCart={handleCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProductSection;
