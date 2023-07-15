import { ProjectTaskState } from "src/entities/projectTasks/entities";
import { StateListDataProps } from "../types";

export type StatePickerProps = {
    data: StateListDataProps;
    newState: ProjectTaskState | null;
    changeTaskState: (payload: ProjectTaskState) => void;
}