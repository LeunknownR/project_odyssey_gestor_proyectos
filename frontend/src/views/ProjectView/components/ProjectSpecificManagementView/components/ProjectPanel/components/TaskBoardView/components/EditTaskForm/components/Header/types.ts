import { TaskForm } from "../../utils/hooks/types";

export type HeaderProps = {
    form: TaskForm;
    name: string;
    doUpdateTask: () => void;
    openModalDeleteTask: () => void;
    openChangeStateModal: () => void;
};