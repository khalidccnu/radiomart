import { IProduct } from '@apis/shop/interfaces';
import { TId } from '@base/interfaces';
import { messages } from '@lib/constant';
import { addCart, removeCart } from '@lib/redux/cart/cartSlice';
import { useAppDispatch } from '@lib/redux/hooks';
import { $$, cn, imageNotFound } from '@lib/utils';
import { message } from 'antd';
import { ClassValue } from 'clsx';
import React from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductOnSaleCard from './ProductOnSaleCard';

interface IProps {
  className?: ClassValue;
  data: IProduct[];
}

const ProductOnSaleSection: React.FC<IProps> = ({ className, data }) => {
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
    <section className={cn('product_on_sale_section relative', className)}>
      {messageHolder}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <img
          className="w-full h-full"
          src={$$.withStorageUrl('/bookland/pattern/random-square-halftone.png')}
          alt=""
          onError={imageNotFound}
        />
      </div>
      <div className="container">
        <h2 className="section_title">Products on Sale</h2>
        <div className="wrapper slider_wrapper relative mt-8 max-w-5xl mx-auto">
          <div className="slider_content_wrapper">
            <Swiper
              loop
              spaceBetween={32}
              slidesPerView={1}
              modules={[Navigation, Pagination]}
              navigation={{
                enabled: true,
                prevEl: '.sp_prev_btn',
                nextEl: '.sp_next_btn',
                disabledClass: 'sp_disabled_btn',
              }}
              pagination={{ el: '.sp_pagination', clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                },
              }}
            >
              {data?.map((elem) => (
                <SwiperSlide key={elem._id} className="group !h-auto">
                  <ProductOnSaleCard key={elem?._id} product={elem} handleCart={handleCart} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="slider_controller_wrapper flex justify-center items-center mt-5 space-x-1">
            <span className="sp_prev_btn flex justify-center items-center bg-[var(--color-primary)] text-white w-6 h-6 rounded-full cursor-pointer">
              <MdOutlineKeyboardArrowLeft size={24} />
            </span>
            <div className="sp_pagination"></div>
            <span className="sp_next_btn flex justify-center items-center bg-[var(--color-primary)] text-white w-6 h-6 rounded-full cursor-pointer">
              <MdOutlineKeyboardArrowRight size={24} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOnSaleSection;
