import { ModalProps } from "src/components/Modal/types";
import { ProjectTaskState } from "src/entities/projectTasks/entities";

export type ChangeStateModalProps = {
    modalProps: ModalProps;
    name: string;
    id: number;
}
export type StateListDataProps = {
    stateName: string;
    state: ProjectTaskState;
}