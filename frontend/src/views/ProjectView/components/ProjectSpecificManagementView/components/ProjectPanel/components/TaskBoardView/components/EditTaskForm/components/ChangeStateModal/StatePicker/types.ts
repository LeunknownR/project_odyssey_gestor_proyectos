import { ProjectTaskState } from "src/entities/projectTasks/entities";

export type StatePickerProps = {
    stateName: string;
    state: ProjectTaskState;
    taskId: number;
    hideModal: () => void;
}