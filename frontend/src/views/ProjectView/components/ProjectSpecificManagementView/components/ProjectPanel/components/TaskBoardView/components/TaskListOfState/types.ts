import {
    ProjectTask, 
    ProjectTaskState 
} from "src/entities/projectTasks/entities";

export type TaskListOfStateProps = {
    sectionName: string;
    state: ProjectTaskState;
    taskListInfo: ProjectTask[];
};