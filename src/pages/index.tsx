import { IProductsResponse } from '@apis/shop/interfaces';
import { ProductsService } from '@apis/shop/services';
import PageWrapper from '@base/container/PageWrapper';
import HeroBannerSection from '@modules/home/HeroBannerSection';
import LatestProductSection from '@modules/home/LatestProductSection';
import { GetStaticProps, NextPage } from 'next';

interface IProps {
  latestProducts: IProductsResponse;
}

const HomePage: NextPage<IProps> = ({ latestProducts }) => {
  return (
    <PageWrapper>
      <HeroBannerSection />
      <LatestProductSection className="pb-14 md:pt-14" data={latestProducts?.data} />
    </PageWrapper>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const latestProductsQuery = await ProductsService.find({
    page: 1,
    limit: 8,
    sort: {
      type: 'desc',
      by: 'createdAt',
    },
  });

  return {
    props: {
      latestProducts: latestProductsQuery,
    },

    revalidate: 60,
  };
};
