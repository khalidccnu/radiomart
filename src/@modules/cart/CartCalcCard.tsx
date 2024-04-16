import { messages, paths } from '@lib/constant';
import { clearCart } from '@lib/redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@lib/redux/hooks';
import { $$ } from '@lib/utils';
import { Button, Card, Popconfirm, Space, message } from 'antd';
import { useRouter } from 'next/router';

const CartCalcCard = () => {
  const router = useRouter();
  const [messageApi, messageHolder] = message.useMessage();
  const { cart, cartCalculation } = useAppSelector((store) => store.cartSlice);
  const dispatch = useAppDispatch();

  return (
    <Card title="Cart">
      {messageHolder}
      <p>Total Price: {$$.withCurrency(cartCalculation.total)}</p>
      <Space direction="vertical" className="mt-5">
        <Popconfirm
          title="Are you sure to clear cart?"
          onConfirm={() => {
            dispatch(clearCart());
            messageApi.success(messages.cart.clear);
          }}
          okText="Yes"
          cancelText="No"
          okButtonProps={{ danger: true }}
        >
          <Button danger disabled={cart?.length < 1}>
            Clear Cart
          </Button>
        </Popconfirm>
        <Button type="primary" disabled={cart?.length < 1} onClick={() => router.push(paths.checkout)}>
          Proceed to Checkout
        </Button>
      </Space>
    </Card>
  );
};

export default CartCalcCard;
