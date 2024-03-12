import { paths } from '@lib/constant';
import { cn } from '@lib/utils';
import { Button } from 'antd';
import { ClassValue } from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';
import { FaStar } from 'react-icons/fa6';

interface IProps {
  className?: ClassValue;
}

const HeroBannerSection: React.FC<IProps> = ({ className }) => {
  const router = useRouter();

  return (
    <section className={cn('hero_banner_section', className)}>
      <div className="container">
        <div className="wrapper">
          <div className="content_wrapper">
            <h1 className="title">
              Make Your Fashion Look Mire <span>Charming</span>
            </h1>
            <p className="description">
              It’s all about celebrating in style with RadioMart. It is a time for celebration and festivities, a time
              to come together with loved ones and make memories.
            </p>
            <div className="btn_container">
              <Button type="primary" onClick={() => router.push(paths.shop)}>
                Go to shop
              </Button>
            </div>
          </div>
          <div className="image_star_container">
            <span className="star_icon">
              <FaStar size={40} />
            </span>
            <div className="image_container">
              <img src="/images/home/hero_banner_thumb.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerSection;
