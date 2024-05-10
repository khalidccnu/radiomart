import { paths } from '@lib/constant';
import { cn } from '@lib/utils';
import { ClassValue } from 'clsx';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { VscHome } from 'react-icons/vsc';

export interface IBreadcrumb {
  slug: string;
  name: string;
}

interface IProps {
  className?: ClassValue;
  items: IBreadcrumb[];
}

const Breadcrumb: React.FC<IProps> = ({ className, items }) => {
  return (
    <ul className={cn('breadcrumb', className)}>
      <li className="breadcrumb_link">
        <Link href={paths.root}>
          <VscHome size={24} />
        </Link>
      </li>
      {items.map((item, i) => {
        return (
          <React.Fragment key={item.name}>
            <li className="breadcrumb_separator">
              <IoIosArrowForward size={18} />
            </li>
            <li className={cn('breadcrumb_link', { active: items.length === i + 1 })}>
              <Link href={item.slug}>{item.name}</Link>
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Breadcrumb;
