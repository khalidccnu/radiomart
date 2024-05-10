import { paths } from '@lib/constant';
import { clearCart } from '@lib/redux/cart/cartSlice';
import { useAppDispatch } from '@lib/redux/hooks';
import { cn } from '@lib/utils';
import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import { getAllDistrict, getAllDivision, getAllUnion, getAllUpazila } from 'bd-divisions-to-unions';
import { ClassValue } from 'clsx';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { IoCalendar } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

interface IProps {
  className?: ClassValue;
}

const CheckoutFormSection: React.FC<IProps> = ({ className }) => {
  const router = useRouter();
  const [formInstance] = Form.useForm();
  const dispatch = useAppDispatch();
  const [districts, setDistricts] = useState([]);
  const [upazillas, setUpazillas] = useState([]);
  const [unions, setUnions] = useState([]);

  const onFinish = () => {
    router.push(paths.completeOrder);
    dispatch(clearCart());
  };

  return (
    <section className={cn(className, 'checkout_form_section')}>
      <div className="container">
        <div className="wrapper">
          <Form layout="vertical" form={formInstance} onFinish={onFinish}>
            <Row gutter={[{ xs: 0 }, { xs: 24, md: 24 }]}>
              <Col xs={24}>
                <div className="contact_info separate_box">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <h3 className="title">Contact Information</h3>
                    <p className="have_account">
                      Already have an account? <Link href={paths.underConstruction}>Sign in</Link>
                    </p>
                  </div>
                </div>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email!',
                    },
                  ]}
                >
                  <Input type="email" placeholder="Email" />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <div className="shipping_address separate_box">
                  <h3 className="title">Shipping Address</h3>
                </div>
                <Row gutter={[{ md: 16 }, { xs: 16, md: 16 }]}>
                  <Col xs={24}>
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your name!',
                        },
                      ]}
                    >
                      <Input placeholder="Name" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12} lg={8}>
                    <Form.Item
                      name="division"
                      rules={[
                        {
                          required: true,
                          message: 'Please select your division!',
                        },
                      ]}
                    >
                      <Select
                        showSearch
                        virtual={false}
                        placeholder="Division"
                        suffixIcon={<MdOutlineKeyboardArrowDown size={24} />}
                        onChange={(_, option: any) => setDistricts(getAllDistrict('en')[option.key])}
                        filterOption={(input, option: any) => option.value.toLowerCase().includes(input.toLowerCase())}
                      >
                        {getAllDivision('en').map((division) => (
                          <Select.Option key={division.value} value={division.title}>
                            {division.title}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12} lg={8}>
                    <Form.Item
                      name="district"
                      rules={[
                        {
                          required: true,
                          message: 'Please select your district!',
                        },
                      ]}
                    >
                      <Select
                        showSearch
                        virtual={false}
                        placeholder="District"
                        suffixIcon={<MdOutlineKeyboardArrowDown size={24} />}
                        onChange={(_, option: any) => setUpazillas(getAllUpazila('en')[option.key])}
                        filterOption={(input, option: any) => option.value.toLowerCase().includes(input.toLowerCase())}
                      >
                        {districts.map((district) => (
                          <Select.Option key={district.value} value={district.title}>
                            {district.title}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12} lg={8}>
                    <Form.Item
                      name="upazilla"
                      rules={[
                        {
                          required: true,
                          message: 'Please select your upazilla!',
                        },
                      ]}
                    >
                      <Select
                        showSearch
                        virtual={false}
                        placeholder="Upazilla"
                        suffixIcon={<MdOutlineKeyboardArrowDown size={24} />}
                        onChange={(_, option: any) => setUnions(getAllUnion('en')[option.key])}
                        filterOption={(input, option: any) => option.value.toLowerCase().includes(input.toLowerCase())}
                      >
                        {upazillas.map((upazilla) => (
                          <Select.Option key={upazilla.value} value={upazilla.title}>
                            {upazilla.title}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12} lg={8}>
                    <Form.Item
                      name="union"
                      rules={[
                        {
                          required: true,
                          message: 'Please select your union!',
                        },
                      ]}
                    >
                      <Select
                        showSearch
                        virtual={false}
                        placeholder="Union"
                        suffixIcon={<MdOutlineKeyboardArrowDown size={24} />}
                        filterOption={(input, option: any) => option.value.toLowerCase().includes(input.toLowerCase())}
                      >
                        {unions.map((union) => (
                          <Select.Option key={union.value} value={union.title}>
                            {union.title}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12} lg={8}>
                    <Form.Item
                      name="street"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your street address!',
                        },
                      ]}
                    >
                      <Input placeholder="Street address" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12} lg={8}>
                    <Form.Item
                      name="postal"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your postal code!',
                        },
                      ]}
                    >
                      <Input placeholder="Postal code" />
                    </Form.Item>
                  </Col>
                  <Col xs={24}>
                    <Form.Item name="exp_delivery">
                      <DatePicker
                        placeholder="Expected Delivery"
                        format="YYYY-MM-DD"
                        suffixIcon={<IoCalendar />}
                        disabledDate={(current) => dayjs(current).isBefore(dayjs(), 'day')}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              {/* <Col xs={24}></Col> */}
              <Col xs={24} className="text-center">
                <Form.Item>
                  <Button type="primary" size="large" htmlType="submit">
                    Complete Order
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default CheckoutFormSection;
