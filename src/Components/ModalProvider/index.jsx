import React from "react";
import { Modal } from "@mui/material";

const ModalProvider = (props) => {
  const { children, modalBtnVariant, isOpen, closeModal } = props;
  return (
    <div>
      {modalBtnVariant}
      <Modal open={isOpen} onClose={closeModal}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-stone-800 p-4">
          {children}
        </div>
      </Modal>
    </div>
  );
};

export default ModalProvider;
