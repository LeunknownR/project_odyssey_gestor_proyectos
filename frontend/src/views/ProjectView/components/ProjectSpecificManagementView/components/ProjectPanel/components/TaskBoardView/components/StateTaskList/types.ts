import {
    ProjectTask, 
    ProjectTaskState 
} from "src/entities/projectTask/entities";

export type StateTaskListData = {
    stateName: string;
    state: ProjectTaskState;
    taskList: ProjectTask[];
};
export type StateTaskListProps = {
    data: StateTaskListData;
    wasDraggingTaskCardRef: React.MutableRefObject<boolean>;
};