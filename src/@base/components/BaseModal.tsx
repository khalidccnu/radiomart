import { Modal } from 'antd';
import React, { PropsWithChildren, useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';

interface IProps extends PropsWithChildren {
  width?: number;
  className?: string;
  clickerElement: React.ReactElement;
}

const BaseModal: React.FC<IProps> = ({ width = 768, className, clickerElement, children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <React.Fragment>
      {React.cloneElement(clickerElement, { onClick: () => setModalOpen(true) })}
      <Modal
        centered
        destroyOnClose
        width={width}
        footer={null}
        open={isModalOpen}
        onCancel={() => setModalOpen(false)}
        closeIcon={<RiCloseFill size={24} />}
        rootClassName="base_modal"
        classNames={{ content: className, body: 'mt-8' }}
      >
        {children}
      </Modal>
    </React.Fragment>
  );
};

export default BaseModal;
