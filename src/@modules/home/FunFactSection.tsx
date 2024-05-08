import NumberCountUp from '@base/components/NumberCountUp';
import { cn } from '@lib/utils';
import { ClassValue } from 'clsx';
import React from 'react';
import { FaProductHunt, FaShop, FaUsers } from 'react-icons/fa6';
import { MdBrandingWatermark } from 'react-icons/md';

interface IProps {
  className?: ClassValue;
}

const FunFactSection: React.FC<IProps> = ({ className }) => {
  return (
    <section className={cn('fun_fact_section', className)}>
      <div className="container">
        <div className="wrapper grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="text-center">
            <span className="flex justify-center items-center text-[var(--color-primary)] text-3xl w-16 h-16 mx-auto border-2 border-[var(--color-primary)] border-dotted rounded">
              <FaUsers />
            </span>
            <h3 className="font-bold text-lg text-[--color-secondary] mt-5">
              <NumberCountUp start={111} end={130} />
            </h3>
            <h3 className="font-medium text-gray-500">Happy Customers</h3>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center text-[var(--color-primary)] text-3xl w-16 h-16 mx-auto border-2 border-[var(--color-primary)] border-dotted rounded">
              <FaProductHunt />
            </div>
            <h3 className="font-bold text-lg text-[--color-secondary] mt-5">
              <NumberCountUp start={78} end={100} />
            </h3>
            <h3 className="font-medium text-gray-500">Product Collections</h3>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center text-[var(--color-primary)] text-3xl w-16 h-16 mx-auto border-2 border-[var(--color-primary)] border-dotted rounded">
              <FaShop />
            </div>
            <h3 className="font-bold text-lg text-[--color-secondary] mt-5">
              <NumberCountUp start={133} end={160} />
            </h3>
            <h3 className="font-medium text-gray-500">Our Stores</h3>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center text-[var(--color-primary)] text-3xl w-16 h-16 mx-auto border-2 border-[var(--color-primary)] border-dotted rounded">
              <MdBrandingWatermark />
            </div>
            <h3 className="font-bold text-lg text-[--color-secondary] mt-5">
              <NumberCountUp start={37} end={50} />
            </h3>
            <h3 className="font-medium text-gray-500">Famous Brands</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactSection;
