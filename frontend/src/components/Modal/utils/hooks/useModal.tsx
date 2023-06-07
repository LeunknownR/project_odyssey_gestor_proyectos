import { useState } from "react";
import { ModalProps } from "src/components/Modal/types";
//#region Types
//#endregion

const useModal = (isOpenDefault?: boolean): ModalProps => {
    const [isOpen, setIsOpen] = useState(isOpenDefault || false);
    return {
        isOpen,
        open: setIsOpen
    };
};

export default useModal;
