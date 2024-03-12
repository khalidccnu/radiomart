import { IProduct } from '@apis/shop/interfaces';
import { cn } from '@lib/utils';
import ProductCard from '@modules/ProductCard';
import { ClassValue } from 'clsx';
import React from 'react';

interface IProps {
  className?: ClassValue;
  data: IProduct[];
}

const PopularProductSection: React.FC<IProps> = ({ className, data }) => {
  return (
    <section className={cn('popular_product_section', className)}>
      <div className="container">
        <h2 className="section_title">Most Popular Products</h2>
        <div className="wrapper">{data?.map((elem) => <ProductCard key={elem?._id} product={elem} />)}</div>
      </div>
    </section>
  );
};

export default PopularProductSection;
