import { useState } from "react";
import { ModalProps } from "src/components/Modal/types";
//#region Types
//#endregion

const useModal = (isOpenDefault = false): ModalProps => {
    const [isOpen, setIsOpen] = useState(isOpenDefault);
    return {
        isOpen,
        handleOpen: setIsOpen,
    };
};

export default useModal;
