import { IProductsResponse } from '@apis/shop/interfaces';
import { ProductsService } from '@apis/shop/services';
import PageWrapper from '@base/container/PageWrapper';
import FunFactSection from '@modules/home/FunFactSection';
import HeroBannerSection from '@modules/home/HeroBannerSection';
import LatestProductSection from '@modules/home/LatestProductSection';
import PopularProductSection from '@modules/home/PopularProductSection';
import ProductOnSaleSection from '@modules/home/ProductOnSaleSection';
import RecommendedProductSection from '@modules/home/RecommendedProductSection';
import TestimonialSection from '@modules/home/TestimonialSection';
import WhatOfferSection from '@modules/home/WhatOfferSection';
import { GetStaticProps, NextPage } from 'next';

interface IProps {
  latestProducts: IProductsResponse;
  popularProducts: IProductsResponse;
}

const HomePage: NextPage<IProps> = ({ latestProducts, popularProducts }) => {
  return (
    <PageWrapper title="Home">
      <HeroBannerSection />
      <LatestProductSection className="py-14" data={latestProducts?.data} />
      <WhatOfferSection className="py-14" />
      <PopularProductSection className="py-14" data={popularProducts?.data} />
      <RecommendedProductSection className="py-14" data={latestProducts?.data} />
      <TestimonialSection className="py-14" />
      <FunFactSection className="pb-14" />
      <ProductOnSaleSection className="py-14" data={popularProducts?.data} />
    </PageWrapper>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const latestProductsPromise = ProductsService.find({
    page: 1,
    limit: 8,
    sort: {
      type: 'desc',
      by: 'createdAt',
    },
  });

  const popularProductsPromise = ProductsService.find({
    page: 1,
    limit: 8,
    discount: true,
  });

  const [latestProductsQuery, popularProductsQuery] = await Promise.all([
    latestProductsPromise,
    popularProductsPromise,
  ]);

  return {
    props: {
      latestProducts: latestProductsQuery,
      popularProducts: popularProductsQuery,
    },

    revalidate: 60,
  };
};
