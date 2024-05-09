import PageWrapper from '@base/container/PageWrapper';
import { paths } from '@lib/constant';
import { Button } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MdHome } from 'react-icons/md';

export default function Custom404() {
  const router = useRouter();

  return (
    <PageWrapper title="404">
      <section className="404_section not_found_section">
        <div className="container">
          <div className="404_wrapper not_found_wrapper">
            <div className="image_container">
              <Image height={0} width={0} sizes="100vw" src="/images/404.svg" alt="404" />
            </div>
            <div className="content_wrapper">
              <h1 className="title">Page Not Found</h1>
              <p className="description">We couldn't find the page you were looking for</p>
              <Button type="primary" icon={<MdHome size={24} />} onClick={() => router.push(paths.root)}>
                Go Back to Home
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
