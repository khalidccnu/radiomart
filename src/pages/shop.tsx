import { IProductsResponse } from '@apis/shop/interfaces';
import { ProductsService } from '@apis/shop/services';
import PageWrapper from '@base/container/PageWrapper';
import AllProductSection from '@modules/shop/AllProductSection';
import { GetServerSideProps, NextPage } from 'next';

interface IProps {
  products: IProductsResponse;
}

const ShopPage: NextPage<IProps> = ({ products }) => {
  return (
    <PageWrapper title="Shop">
      <AllProductSection className="py-20" products={products} />
    </PageWrapper>
  );
};

export default ShopPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const productsQuery = await ProductsService.find({
    page: Number(query?.page) || 1,
    limit: Number(query?.limit) || 8,
  });

  return {
    props: {
      products: productsQuery,
    },
  };
};
