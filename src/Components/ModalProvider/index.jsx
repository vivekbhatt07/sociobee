import React from "react";
import { Modal } from "@mui/material";
import { IconActionBtn } from "../Actions";
import CloseIcon from "@mui/icons-material/Close";

const ModalProvider = (props) => {
  const { children, modalBtnVariant, isOpen, closeModal, modalTitle } = props;
  return (
    <div>
      {modalBtnVariant}
      <Modal open={isOpen} onClose={closeModal}>
        <div className="text-stone-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-stone-50 p-4 flex flex-col gap-4 rounded dark:text-stone-50 dark:bg-stone-800">
          <div className="flex justify-between items-center">
            <span className="font-medium">{modalTitle}</span>
            <IconActionBtn
              handleClick={() => closeModal()}
              className="text-stone-950 dark:text-stone-50 hover:text-stone-950 hover:dark:text-stone-950"
            >
              <CloseIcon />
            </IconActionBtn>
          </div>
          <div className="outline outline-stone-500">{children}</div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalProvider;
