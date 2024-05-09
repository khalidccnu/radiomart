import { ITestimonial } from '@apis/testimonial/interfaces';
import { $$, cn, imageNotFound } from '@lib/utils';
import { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';
import { BsQuote } from 'react-icons/bs';

interface IProps {
  idx: number;
  className?: ClassValue;
  testimonial: ITestimonial;
}

const TestimonialCard: React.FC<IProps> = ({ idx, className, testimonial }) => {
  return (
    <motion.div
      className={cn(
        'testimonial_card flex flex-col bg-[var(--color-blue-light-50)] text-center rounded overflow-hidden',
        className,
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: idx * 0.1,
      }}
      viewport={{ once: true }}
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
    </motion.div>
  );
};

export default TestimonialCard;
