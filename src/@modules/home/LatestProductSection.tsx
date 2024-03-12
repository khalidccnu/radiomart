import { IProduct } from '@apis/shop/interfaces';
import { $$, cn } from '@lib/utils';
import { Col, Row } from 'antd';
import { ClassValue } from 'clsx';
import React from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IProps {
  className?: ClassValue;
  data: IProduct[];
}

const LatestProductSection: React.FC<IProps> = ({ className, data }) => {
  return (
    <section className={cn('latest_product_section', className)}>
      <div className="container">
        <Row
          gutter={[
            { xs: 0, md: 16, lg: 24 },
            { xs: 16, md: 0 },
          ]}
          align="middle"
        >
          <Col xs={24} md={8}>
            <h2 className="section_title md:hidden">Discover Latest Collection</h2>
            <div className="thumb_container mt-8 md:mt-0">
              <img src={$$.withStorageUrl(data?.[0]?.image?.filePath)} alt={data?.[0]?.image?.name} />
            </div>
          </Col>
          <Col xs={24} md={16}>
            <h2 className="section_title hidden md:block">Discover Latest Collection</h2>
            <div className="slider_wrapper md:mt-8">
              <div className="slider_content_wrapper">
                <Swiper
                  loop
                  slidesPerView={3}
                  spaceBetween={16}
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation={{
                    enabled: true,
                    prevEl: '.lp_prev_btn',
                    nextEl: '.lp_next_btn',
                    disabledClass: 'lp_disabled_btn',
                  }}
                  pagination={{ el: '.lp_pagination', clickable: true }}
                  autoplay={{
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {data?.slice(1)?.map((elem) => (
                    <SwiperSlide key={elem?._id}>
                      <img src={$$.withStorageUrl(elem?.image?.filePath)} alt={elem?.image?.name} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="slider_controller_wrapper">
                <div className="prev_next_wrapper">
                  <span className="lp_prev_btn">
                    <FaArrowLeftLong size={24} />
                  </span>
                  <span className="lp_next_btn">
                    <FaArrowRightLong size={24} />
                  </span>
                </div>
                <div className="lp_pagination"></div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default LatestProductSection;
