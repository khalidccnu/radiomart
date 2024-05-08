import { IProduct } from '@apis/shop/interfaces';
import { TId } from '@base/interfaces';
import { messages } from '@lib/constant';
import { addCart, removeCart } from '@lib/redux/cart/cartSlice';
import { useAppDispatch } from '@lib/redux/hooks';
import { cn } from '@lib/utils';
import { message } from 'antd';
import { ClassValue } from 'clsx';
import React from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RecommendedProductCard from './RecommendedProductCard';

interface IProps {
  className?: ClassValue;
  data: IProduct[];
}

const RecommendedProductSection: React.FC<IProps> = ({ className, data }) => {
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
    <section className={cn('recommended_product_section', className)}>
      {messageHolder}
      <div className="container">
        <h2 className="section_title">Recommended Products</h2>
        <div className="wrapper slider_wrapper relative mt-8">
          <div className="slider_content_wrapper">
            <Swiper
              loop
              centeredSlides
              slidesPerView={1}
              effect="coverflow"
              modules={[EffectCoverflow, Navigation, Autoplay]}
              navigation={{
                enabled: true,
                prevEl: '.rp_prev_btn',
                nextEl: '.rp_next_btn',
                disabledClass: 'rp_disabled_btn',
              }}
              autoplay={{
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {data?.map((elem) => (
                <SwiperSlide key={elem._id} className="group">
                  <RecommendedProductCard key={elem?._id} product={elem} handleCart={handleCart} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="slider_controller_wrapper">
            <span className="rp_prev_btn absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-[var(--color-primary)] text-white w-6 h-6 rounded cursor-pointer z-10">
              <MdOutlineKeyboardArrowLeft size={24} />
            </span>
            <span className="rp_next_btn absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-[var(--color-primary)] text-white w-6 h-6 rounded cursor-pointer z-10">
              <MdOutlineKeyboardArrowRight size={24} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedProductSection;
