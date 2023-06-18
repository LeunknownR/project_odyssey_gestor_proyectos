import {
    ProjectTask, 
    ProjectTaskState 
} from "src/entities/projectTasks/entities";

export type StateTaskListProps = {
    stateName: string;
    state: ProjectTaskState;
    taskList: ProjectTask[];
};