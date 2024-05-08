import { cn } from '@lib/utils';
import { ClassValue } from 'clsx';
import React from 'react';

interface IProps {
  className?: ClassValue;
}

const PartnerSection: React.FC<IProps> = ({ className }) => {
  const wrapperStyles: any = {
    '--partner-anm-time': '25s',
  };

  return (
    <section className={cn('partner_section', className)}>
      <div className="container">
        <div className="wrapper" style={wrapperStyles}>
          {[...Array(2)]?.map((_, idx) => {
            return (
              <div key={idx} className="images_wrapper">
                <div className="image_container">
                  <img src="/images/partner/amajine.svg" alt="" />
                </div>
                <div className="image_container">
                  <img src="/images/partner/boosst.svg" alt="" />
                </div>
                <div className="image_container">
                  <img src="/images/partner/glowup.svg" alt="" />
                </div>
                <div className="image_container">
                  <img src="/images/partner/highlow.svg" alt="" />
                </div>
                <div className="image_container">
                  <img src="/images/partner/manthul.svg" alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
