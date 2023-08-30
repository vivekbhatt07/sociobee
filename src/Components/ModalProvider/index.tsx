import { FC, ReactNode } from "react";
import { Modal } from "@mui/material";
import { Close } from "@mui/icons-material";
import { IconActionBtn } from "../Actions";

interface ModalProviderType {
  children: ReactNode;
  modalBtnVariant: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  modalTitle: string;
}

const ModalProvider: FC<ModalProviderType> = (props) => {
  const { children, modalBtnVariant, isOpen, closeModal, modalTitle } = props;
  return (
    <div>
      {modalBtnVariant}
      <Modal open={isOpen} onClose={closeModal}>
        <div className="text-stone-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-stone-200 p-4 flex flex-col gap-4 rounded dark:text-stone-50 dark:bg-stone-800">
          <div className="flex justify-between items-center">
            <span className="font-medium">{modalTitle}</span>
            <IconActionBtn
              iconBtnType="button"
              iconTitle="Close"
              iconBtnLabel="close modal"
              handleClick={() => closeModal()}
              className="text-stone-950 dark:text-stone-50 hover:text-stone-950 hover:dark:text-stone-950"
            >
              <Close className="dark:text-stone-50" />
            </IconActionBtn>
          </div>
          <div className="bg-stone-50 rounded-md dark:bg-stone-900 overflow-hidden">
            {children}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalProvider;
