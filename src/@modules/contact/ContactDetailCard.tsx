import { cn } from '@lib/utils';
import { ClassValue } from 'clsx';
import React from 'react';

interface IProps {
  className?: ClassValue;
  icon: React.ReactNode;
  title: string;
  description: string;
  descriptionType?: 'text' | 'link';
  descriptionLink?: string;
}

const ContactDetailCard: React.FC<IProps> = ({
  className,
  icon,
  title,
  description,
  descriptionType = 'text',
  descriptionLink,
}) => {
  return (
    <div
      className={cn(
        'contact_detail_card bg-[var(--color-gray-50)] px-8 py-10 rounded shadow-sm text-center',
        className,
      )}
    >
      <span className="icon_container inline-flex justify-center items-center w-12 h-12 border border-[var(--color-primary)] border-dotted rounded-full text-[var(--color-primary)] text-lg">
        {icon}
      </span>
      <div className="content_wrapper mt-4">
        <h3 className="title font-bold text-lg text-[var(--color-secondary)]">{title}</h3>
        <p
          className={cn('description font-medium text-[var(--color-gray-500)] break-words', {
            'hover:text-[var(--color-primary)] transition-colors duration-500': descriptionType !== 'text',
          })}
        >
          {descriptionType === 'text' ? description : <a href={descriptionLink}>{description}</a>}
        </p>
      </div>
    </div>
  );
};

export default ContactDetailCard;
