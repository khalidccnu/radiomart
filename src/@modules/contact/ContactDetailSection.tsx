import { cn } from '@lib/utils';
import { ClassValue } from 'clsx';
import React from 'react';
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa6';
import ContactDetailCard from './ContactDetailCard';

interface IProps {
  className?: ClassValue;
}

const ContactDetailSection: React.FC<IProps> = ({ className }) => {
  return (
    <section className={cn('contact_detail_section', className)}>
      <div className="container">
        <div className="wrapper grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactDetailCard
            icon={<FaPhone size={24} />}
            title="Phone"
            description="+880 1712 345 678"
            descriptionType="link"
            descriptionLink="tel:+8801712345678"
          />
          <ContactDetailCard
            icon={<FaEnvelope size={24} />}
            title="Email"
            description="contact@radiomart.com"
            descriptionType="link"
            descriptionLink="mailto:contact@radiomart.com"
          />
          <ContactDetailCard
            icon={<FaLocationArrow size={24} />}
            title="Address"
            description="2/1/E, Eden Center, Arambag, Motijheel, Dhaka-1000"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactDetailSection;
