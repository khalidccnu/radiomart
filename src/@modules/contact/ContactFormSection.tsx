import { cn } from '@lib/utils';
import { Button, Col, Form, Input, Row } from 'antd';
import { ClassValue } from 'clsx';
import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa6';

interface IProps {
  className?: ClassValue;
}

const ContactFormSection: React.FC<IProps> = ({ className }) => {
  const [formInstance] = Form.useForm();
  const [anmContact, setAnmContact] = useState(null);

  useEffect(() => {
    import(`@lib/assets/animation/contact.json`).then((response) => setAnmContact(response.default));
  }, []);

  return (
    <section className={cn('contact_form_section', className)}>
      <div className="container">
        <h2 className="section_title text-center">Drop us a message for any query</h2>
        <div className="wrapper">
          <div className="anm_wrapper md:h-[28rem] -mt-12 -mb-24">
            {anmContact ? <Lottie className="md:h-full" animationData={anmContact} loop={true} /> : null}
          </div>
          <div className="form_wrapper">
            <Form layout="vertical" form={formInstance}>
              <Row gutter={[{ xs: 0 }, { xs: 16, md: 16 }]}>
                <Col xs={24}>
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Please write your name!',
                      },
                    ]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: 'email',
                        required: true,
                        message: 'Please write your email!',
                      },
                    ]}
                  >
                    <Input placeholder="Email address" />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name="message"
                    rules={[
                      {
                        required: true,
                        message: 'Please write your message!',
                      },
                    ]}
                  >
                    <Input.TextArea rows={5} style={{ resize: 'none' }} placeholder="Write something..." />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      icon={<FaPaperPlane size={24} className="-mb-1" />}
                      className="w-full"
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
