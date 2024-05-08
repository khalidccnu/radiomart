import { ITestimonial } from '@apis/testimonial/interfaces';
import { $$, cn, imageNotFound } from '@lib/utils';
import { ClassValue } from 'clsx';
import React from 'react';
import { BsQuote } from 'react-icons/bs';

interface IProps {
  className?: ClassValue;
  testimonial: ITestimonial;
}

const TestimonialCard: React.FC<IProps> = ({ className, testimonial }) => {
  return (
    <div
      className={cn(
        'testimonial_card flex flex-col bg-[var(--color-blue-light-50)] text-center rounded overflow-hidden',
        className,
      )}
    >
      <div className="relative px-8 py-12">
        <span className="absolute top-1 left-1 text-5xl text-gray-300">
          <BsQuote />
        </span>
        <p className="relative text-gray-500">{testimonial?.comment}</p>
      </div>
      <div className="relative px-8 pt-12 pb-6 mt-auto bg-[var(--color-secondary-black)] text-white">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-[var(--color-primary)] rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={$$.withStorageUrl(testimonial?.image)}
            alt={testimonial?.name}
            onError={imageNotFound}
          />
        </div>
        <h3 className="font-bold text-lg">{testimonial?.name}</h3>
        <h5 className="font-medium text-[var(--color-gray-300)]">{testimonial?.profession}</h5>
      </div>
    </div>
  );
};

export default TestimonialCard;
