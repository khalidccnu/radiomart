import PageWrapper from '@base/container/PageWrapper';
import CheckoutFormSection from '@modules/checkout/CheckoutFormSection';

const CheckoutPage = () => {
  return (
    <PageWrapper title="Checkout">
      <CheckoutFormSection className="py-14" />
    </PageWrapper>
  );
};

export default CheckoutPage;
