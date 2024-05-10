import { cn } from '@lib/utils';
import { Button, Form, Grid, Input, Space, Steps } from 'antd';
import { ClassValue } from 'clsx';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { GiConfirmed } from 'react-icons/gi';
import { GrDeliver } from 'react-icons/gr';
import { TbBrandDeliveroo } from 'react-icons/tb';

interface IProps {
  className?: ClassValue;
}

const TrackOrderSection: React.FC<IProps> = ({ className }) => {
  const screens = Grid.useBreakpoint();
  const [formInstance] = Form.useForm();
  const [progressSteps, setProgressSteps] = useState(false);

  return (
    <section className={cn('track_order_section', className)}>
      <div className="container">
        <div className="wrapper max-w-3xl mx-auto">
          <div className="form_wrapper">
            <Form layout="vertical" form={formInstance} onFinish={() => setProgressSteps(true)}>
              <Form.Item
                name="identifier"
                rules={[
                  {
                    required: true,
                    message: 'Please write your order id!',
                  },
                ]}
              >
                <Space.Compact style={{ width: '100%' }}>
                  <Input placeholder="Order ID" />
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<BsSearch size={24} className="-mb-1" />}
                    className="!px-5 !w-auto"
                  />
                </Space.Compact>
              </Form.Item>
            </Form>
          </div>
          {progressSteps && (
            <div className="progress_wrapper mt-8 lg:mt-16">
              <Steps
                direction={screens.lg ? 'horizontal' : 'vertical'}
                items={[
                  {
                    icon: <GiConfirmed size={32} />,
                    title: 'Confirm',
                  },
                  {
                    icon: <GrDeliver size={32} />,
                    title: 'In Transit',
                  },
                  {
                    icon: <TbBrandDeliveroo size={32} />,
                    title: 'Delivered',
                  },
                ]}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackOrderSection;
