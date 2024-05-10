import { CartHook } from '@apis/cart/hooks';
import { IProductsResponse } from '@apis/shop/interfaces';
import { messages } from '@lib/constant';
import { executeCartCalc, removeCart, updateCart } from '@lib/redux/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@lib/redux/hooks';
import { $$ } from '@lib/utils';
import type { TableColumnsType } from 'antd';
import { Button, Image, InputNumber, Popconfirm, Table, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa6';

const CartList = () => {
  const [messageApi, messageHolder] = message.useMessage();
  const { cart } = useAppSelector((store) => store.cartSlice);
  const dispatch = useAppDispatch();
  const [cartItems, setCartItems] = useState<IProductsResponse>(null);
  const [isRefetchCalc, setRefetchCalc] = useState(false);

  const cartBulkFn = CartHook.useBulkFind({
    options: {
      ids: true,
      page: 1,
      limit: 20,
    },
    config: {
      onSuccess(res) {
        if (!res.success) {
          messageApi.error(res.message);
          return;
        }

        setCartItems(res);
      },
    },
  });

  const dataSource = cartItems?.data?.map((elem) => ({
    key: elem?._id,
    _id: elem?._id,
    image: elem?.image,
    name: elem?.name,
    price: elem?.price,
    stock: elem?.stock,
    quantity: cart?.find((cartItem) => cartItem?.id === elem?._id)?.quantity,
  }));

  const columns: TableColumnsType<(typeof dataSource)[number]> = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
      render: (name, record) => (
        <div className="flex items-center gap-2 min-w-48">
          <Image
            src={$$.withStorageUrl(record?.image?.filePath)}
            alt={record?.image?.name}
            width={28}
            className="rounded-full"
            rootClassName="shrink-0"
          />
          <span>{name}</span>
        </div>
      ),
    },
    {
      key: 'price',
      dataIndex: 'price',
      title: 'Price',
      render: (price) => <p className="min-w-16">{$$.withCurrency(price)}</p>,
    },
    {
      key: 'quantity',
      dataIndex: 'quantity',
      title: 'Quantity',
      render: (quantity, record) => (
        <InputNumber
          min={1}
          defaultValue={quantity}
          onChange={(value) => {
            dispatch(updateCart({ id: record?._id, quantity: value }));
            setRefetchCalc((prev) => !prev);
          }}
        />
      ),
    },
    {
      key: '_id',
      title: 'Action',
      dataIndex: '_id',
      align: 'center',
      render: (_id) => (
        <Popconfirm
          title="Are you sure to delete it?"
          onConfirm={() => {
            dispatch(removeCart({ short: true, id: _id }));
            messageApi.success(messages.cart.remove);
          }}
          okText="Yes"
          cancelText="No"
          okButtonProps={{ danger: true }}
        >
          <Button icon={<FaTrash className="-mb-1" />} danger />
        </Popconfirm>
      ),
    },
  ];

  useEffect(() => {
    cartBulkFn.mutateAsync(cart?.map((elem) => elem.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart?.length]);

  useEffect(() => {
    dispatch(executeCartCalc({ product: dataSource }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefetchCalc, dataSource?.length]);

  return (
    <React.Fragment>
      {messageHolder}
      <Table
        bordered
        pagination={false}
        loading={cartBulkFn?.isPending}
        dataSource={dataSource}
        columns={columns}
        scroll={{ x: true }}
      />
    </React.Fragment>
  );
};

export default CartList;
