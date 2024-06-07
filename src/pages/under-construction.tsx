import PageWrapper from '@base/container/PageWrapper';
import { paths } from '@lib/constant';
import { Button } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MdHome } from 'react-icons/md';

const UnderConstructionPage = () => {
  const router = useRouter();

  return (
    <PageWrapper title="Under Construction">
      <section className="under_construction_section py-14">
        <div className="container">
          <div className="wrapper">
            <div className="image_container">
              <Image height={0} width={0} sizes="100vw" src="/images/under_construction.svg" alt="" />
            </div>
            <div className="content_wrapper">
              <h1 className="title">Under Construction</h1>
              <p className="description">We will be back very soon.</p>
              <Button
                type="primary"
                icon={<MdHome size={24} className="-mb-1" />}
                onClick={() => router.push(router.query?.requestUrl ? String(router.query.requestUrl) : paths.root)}
              >
                {` Go Back to ${router.query?.requestUrl ? 'Destination' : 'Home'}`}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default UnderConstructionPage;
