import { ProjectTaskState } from "../../../../entities/projectTasks/entities";
import { WSUserData } from "../../../utils/types";

export type WSUserDataProjectTaskService = WSUserData & {
    projectId: number;
};
export type WSNewProjectTask = {
    name: string;
    state: ProjectTaskState;
};
export type WSTaskToBeUpdated = {
    taskId: number;
    responsibleId: number | null;
    name: string;
    description: string | null;
    deadline: number;
    priotityId: number | null;
    newSubTask: string[];
    subTaskIdsToBeDeleted: number[];
};
export type WSProjectTaskForm<T extends WSNewProjectTask|WSTaskToBeUpdated> = {
    collaboratorId: number;
    projectId: number;
    task: T;
};
export type WSNewProjectTaskForm = WSProjectTaskForm<WSNewProjectTask>;
export type WSProjectTaskToBeUpdatedForm = WSProjectTaskForm<WSTaskToBeUpdated>;