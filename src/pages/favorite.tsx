import { CartHook } from '@apis/cart/hooks';
import { IProductsResponse } from '@apis/shop/interfaces';
import PageWrapper from '@base/container/PageWrapper';
import { useAppSelector } from '@lib/redux/hooks';
import AllProductSection from '@modules/shop/AllProductSection';
import { Empty, Spin, message } from 'antd';
import { useEffect, useState } from 'react';

const FavoritePage = () => {
  const [messageApi, messageHolder] = message.useMessage();
  const { favorite } = useAppSelector((store) => store.favoriteSlice);
  const [isFavoriteItemsLoading, setFavoriteItemsLoading] = useState(true);
  const [favoriteItems, setFavoriteItems] = useState<IProductsResponse>(null);

  const favoriteBulkFn = CartHook.useBulkFind({
    options: {
      ids: true,
      page: 1,
      limit: 20,
    },
    config: {
      onSuccess(res) {
        if (!res.success) {
          messageApi.error(res.message);
          return;
        }

        setFavoriteItems(res);
        setFavoriteItemsLoading(false);
      },
    },
  });

  useEffect(() => {
    favoriteBulkFn.mutateAsync(favorite?.map((elem) => elem.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorite?.length]);

  return (
    <PageWrapper title="Favorite">
      {messageHolder}
      {isFavoriteItemsLoading ? (
        <Spin size="large" className="spinner py-20" />
      ) : favoriteItems?.data?.length ? (
        <AllProductSection className="py-20" products={favoriteItems} pagination={false} />
      ) : (
        <Empty className="py-20" description="No favorite product was found!" />
      )}
    </PageWrapper>
  );
};

export default FavoritePage;
