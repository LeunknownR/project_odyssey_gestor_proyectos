import { ModalProps } from "src/components/Modal/types"

export type FooterProps = {
    modal: ModalProps;
    deleteProject: () => Promise<void>;
}