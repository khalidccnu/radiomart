import PageWrapper from '@base/container/PageWrapper';
import { paths } from '@lib/constant';
import { Button } from 'antd';
import Image from 'next/image';

const CompleteOrderPage = () => {
  return (
    <PageWrapper title="Thank you for your order!">
      <section className="py-14 text-center">
        <div className="container">
          <div className="max-w-lg mx-auto p-6">
            <div className="relative bg-gray-50 border-b-2 border-l-2 border-dotted p-8">
              <Image
                src="/images/complete_order/clock.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-12"
              />
              <Image
                src="/images/complete_order/complete.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-12 mx-auto"
              />
              <h1 className="text-3xl font-bold text-[var(--color-primary)] my-3">Your Order Is Completed!</h1>
              <p className="text-gray-500">
                Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will
                receive an email confirmation when your order is completed.
              </p>
              <Button type="link" href={paths.shop}>
                Continue Shopping
              </Button>
              <Image
                src="/images/complete_order/checklist.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-12"
              />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default CompleteOrderPage;
