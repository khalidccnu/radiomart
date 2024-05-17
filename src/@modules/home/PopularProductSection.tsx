import { ProductsHook } from '@apis/shop/hooks';
import { IProduct, IProductsResponse } from '@apis/shop/interfaces';
import { TId } from '@base/interfaces';
import { messages } from '@lib/constant';
import { addCart, removeCart } from '@lib/redux/cart/cartSlice';
import { addFavorite, removeFavorite } from '@lib/redux/favorite/favoriteSlice';
import { useAppDispatch } from '@lib/redux/hooks';
import { cn } from '@lib/utils';
import { Pagination, message } from 'antd';
import { ClassValue } from 'clsx';
import React, { useEffect, useState } from 'react';
import StandardProductCard from './StandardProductCard';

interface IProps {
  className?: ClassValue;
  initialProductsResponse: IProductsResponse;
}

const PopularProductSection: React.FC<IProps> = ({ className, initialProductsResponse }) => {
  const [initialCSR, setInitialCSR] = useState(false);
  const dispatch = useAppDispatch();
  const [messageApi, messageHolder] = message.useMessage();
  const [products, setProducts] = useState<IProduct[]>(initialProductsResponse?.data);

  const [productsOptions, setProductsOptions] = useState({
    page: initialProductsResponse?.meta?.page,
    limit: initialProductsResponse?.meta?.limit,
  });

  const productsQuery = ProductsHook.useFind({
    config: {
      queryKey: [],
      enabled: initialCSR,
    },
    options: {
      page: +productsOptions?.page,
      limit: +productsOptions?.limit,
    },
  });

  const handleFavorite = (isFavorite: boolean, id: TId) => {
    if (isFavorite) {
      dispatch(removeFavorite({ id }));
      messageApi.success(messages.favorite.remove);
    } else {
      dispatch(addFavorite({ id }));
      messageApi.success(messages.favorite.add);
    }
  };

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

  useEffect(() => {
    if (productsQuery?.data?.data?.length) setProducts(productsQuery?.data?.data);
  }, [productsQuery?.data?.data]);

  return (
    <section className={cn('popular_product_section', className)}>
      {messageHolder}
      <div className="container">
        <h2 className="section_title">Most Popular Products</h2>
        <div className="wrapper">
          {products?.map((product, idx) => (
            <StandardProductCard
              key={product?._id}
              idx={idx}
              product={product}
              handleFavorite={handleFavorite}
              handleCart={handleCart}
            />
          ))}
        </div>
        {initialProductsResponse?.meta?.total > productsOptions.limit && (
          <Pagination
            className="w-fit !mx-auto !mt-8"
            defaultCurrent={productsOptions?.page}
            total={initialProductsResponse?.meta?.total}
            pageSize={productsOptions?.limit}
            onChange={(page, limit) => {
              setInitialCSR(true);
              setProductsOptions({ ...productsOptions, page, limit });
            }}
          />
        )}
      </div>
    </section>
  );
};

export default PopularProductSection;
