import { CustomButtonProps } from "src/components/CustomButton/types";
import { ModalProps } from "src/components/Modal/types";
import { NotificationCardHook } from "src/components/NotificationCard/types";
import { PreloaderHook } from "src/components/Preloader/types";

export type AddMembersModalProps = {
    modalProps: ModalProps;
    preloader: PreloaderHook;
    notificationCard: NotificationCardHook;
    projectId: number;
};

export type ModalButtonProps = {
    buttonProps: CustomButtonProps;
};