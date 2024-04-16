import PageWrapper from '@base/container/PageWrapper';
import CartCalcCard from '@modules/cart/CartCalcCard';
import CartList from '@modules/cart/CartList';
import { Col, Row } from 'antd';

const CartPage = () => {
  return (
    <PageWrapper title="Cart">
      <section className="py-14">
        <div className="container">
          <Row
            gutter={[
              { xs: 0, lg: 32 },
              { xs: 16, md: 16, lg: 0 },
            ]}
          >
            <Col xs={24} lg={16}>
              <CartList />
            </Col>
            <Col xs={24} lg={8}>
              <CartCalcCard />
            </Col>
          </Row>
        </div>
      </section>
    </PageWrapper>
  );
};

export default CartPage;
