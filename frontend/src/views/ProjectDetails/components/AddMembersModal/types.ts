import { CustomButtonProps } from "src/components/CustomButton/types";
import { ModalProps } from "src/components/Modal/types";
import { PreloaderHook } from "src/components/Preloader/types";

export type AddMembersChangesModalProps = {
    modalProps: ModalProps;
    preloader: PreloaderHook;
};

export type ModalButtonProps = {
    buttonProps: CustomButtonProps;
};