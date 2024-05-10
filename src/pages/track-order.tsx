import BaseHeroWrapper from '@base/components/BaseHeroWrapper';
import PageWrapper from '@base/container/PageWrapper';
import { paths } from '@lib/constant';
import TrackOrderSection from '@modules/track-order/TrackOrderSection';

const TrackOrderPage = () => {
  return (
    <PageWrapper title="Track your order!">
      <BaseHeroWrapper title="track your order" breadcrumb={[{ name: 'track order', slug: paths.trackOrder }]} />
      <TrackOrderSection className="py-14" />
    </PageWrapper>
  );
};

export default TrackOrderPage;
