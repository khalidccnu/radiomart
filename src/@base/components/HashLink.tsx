import { cn } from '@lib/utils';
import { useLenis } from '@studio-freight/react-lenis';
import { ClassValue } from 'clsx';
import Link from 'next/link';
import React from 'react';

interface IProps {
  className?: ClassValue;
  name: string;
  href: string;
  options?: any;
}

const HashLink: React.FC<IProps> = ({ className, name, href, options }) => {
  const lenis = useLenis();

  return (
    <Link href={href} className={cn('hashlink', className)} onClick={() => lenis.scrollTo(href, options)}>
      {name}
    </Link>
  );
};

export default HashLink;
