import { cn } from '@lib/utils';
import { ClassValue } from 'clsx';
import Link from 'next/link';
import React from 'react';

interface IProps {
  className?: ClassValue;
  title: string;
  slug: string;
}

const HoverableLink: React.FC<IProps> = ({ className, title, slug }) => {
  return (
    <Link className={cn('absolute top-0 left-0 z-10 w-full h-full opacity-0 hoverable_link', className)} href={slug}>
      {title}
    </Link>
  );
};

export default HoverableLink;
