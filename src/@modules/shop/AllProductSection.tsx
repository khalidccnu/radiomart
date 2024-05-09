import { IProductsResponse } from '@apis/shop/interfaces';
import { TId } from '@base/interfaces';
import { messages } from '@lib/constant';
import { addCart, removeCart } from '@lib/redux/cart/cartSlice';
import { useAppDispatch } from '@lib/redux/hooks';
import { $$, cn } from '@lib/utils';
import StandardProductCard from '@modules/home/StandardProductCard';
import type { PaginationProps } from 'antd';
import { Pagination, message } from 'antd';
import { ClassValue } from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';

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
  const dispatch = useAppDispatch();
  const [messageApi, messageHolder] = message.useMessage();

  const handleCart = (isCart: boolean, id: TId) => {
    const short = true;

    if (isCart) {
      dispatch(removeCart({ short, id }));
      messageApi.success(messages.cart.remove);
    } else {
      dispatch(addCart({ short, id }));
      messageApi.success(messages.cart.add);
    }
  };

  return (
    <section className={cn(className, 'all_product_section')}>
      {messageHolder}
      <div className="container">
        <div className="wrapper">
          {products?.data?.map((product, idx) => (
            <StandardProductCard key={product?._id} idx={idx} product={product} handleCart={handleCart} />
          ))}
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
