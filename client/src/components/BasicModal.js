import { Button, Modal } from "antd";
import React, { useState } from "react";
const BasicModal = ({
  children,
  isModalOpen,
  setIsModalOpen,
  cancel,
  title,
}) => {
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        footer={null}
        onCancel={cancel ? handleCancel : null}
      >
        {children}
      </Modal>
    </>
  );
};
export default BasicModal;
