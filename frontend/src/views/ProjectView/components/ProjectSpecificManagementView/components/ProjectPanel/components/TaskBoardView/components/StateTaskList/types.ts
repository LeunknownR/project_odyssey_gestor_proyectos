import {
    ProjectTask, 
    ProjectTaskState 
} from "src/entities/projectTasks/entities";

export type StateTaskListData = {
    stateName: string;
    state: ProjectTaskState;
    taskList: ProjectTask[];
};
export type StateTaskListProps = {
    data: StateTaskListData;
    wasDraggingTaskCardRef: React.MutableRefObject<boolean>;
};