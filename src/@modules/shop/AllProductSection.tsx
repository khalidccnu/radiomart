import { IProduct, IProductsResponse } from '@apis/shop/interfaces';
import { $$, cn } from '@lib/utils';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import { ClassValue } from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';
import ProductCard from './ProductCard';

interface IProps {
  className?: ClassValue;
  products: IProductsResponse;
}

const paginationItemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev') return <a>Previous</a>;
  if (type === 'next') return <a>Next</a>;

  return originalElement;
};

const AllProductSection: React.FC<IProps> = ({ className, products }) => {
  const router = useRouter();

  return (
    <section className={cn(className, 'all_product_section')}>
      <div className="container">
        <div className="wrapper">
          {products?.data?.map((product: IProduct) => <ProductCard key={product?._id} product={product} />)}
        </div>
        <Pagination
          className="products_pagination"
          defaultCurrent={products?.meta?.page}
          total={products?.meta?.total}
          pageSize={products?.meta?.limit}
          onChange={(page, limit) =>
            router.push({
              query: $$.toCleanObject({ ...router.query, page, limit }),
            })
          }
          itemRender={paginationItemRender}
        />
      </div>
    </section>
  );
};

export default AllProductSection;
