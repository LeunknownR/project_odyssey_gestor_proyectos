import { ProjectTaskState } from "src/entities/projectTask/entities";
import { StateListDataProps } from "../types";

export type StatePickerProps = {
    data: StateListDataProps;
    newState: ProjectTaskState | null;
    changeTaskState: (payload: ProjectTaskState) => void;
}