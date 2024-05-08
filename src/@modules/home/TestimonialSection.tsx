import { testimonialMocData } from '@apis/testimonial/testimonialMocData';
import { cn } from '@lib/utils';
import { ClassValue } from 'clsx';
import React from 'react';
import TestimonialCard from './TestimonialCard';

interface IProps {
  className?: ClassValue;
}

const TestimonialSection: React.FC<IProps> = ({ className }) => {
  return (
    <section className={cn('testimonial_section', className)}>
      <div className="container">
        <h2 className="section_title">Testimonials</h2>
        <p className="section_description">
          We shared our past customers review that describes how our products or service helped them.
        </p>
        <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {testimonialMocData?.map((testimonial) => (
            <TestimonialCard key={testimonial?._id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
