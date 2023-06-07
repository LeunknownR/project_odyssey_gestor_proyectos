import { ProjectTaskState } from "../../../../entities/projectTasks/entities";
import { WSUserData } from "../../../utils/types";

export type WSUserDataProjectTaskService = WSUserData & {
    projectId: number;
};
export type WSNewProjectTask = {
    name: string;
    state: ProjectTaskState;
};
export type WSProjectTaskToBeUpdated = {
    taskId: number;
    responsibleId: number | null;
    name: string;
    description: string | null;
    deadline: number;
    priotityId: number | null;
    newSubTask: string[];
    subTaskIdsToBeDeleted: number[];
};
export type WSProjectTaskComment = {
    taskId: number;
    content: string;
};
export type WSProjectTaskForm<T> = {
    collaboratorId: number;
    projectId: number;
    payload: T;
};
export type WSNewProjectTaskForm = WSProjectTaskForm<WSNewProjectTask>;
export type WSProjectTaskToBeUpdatedForm = WSProjectTaskForm<WSProjectTaskToBeUpdated>;
export type WSProjectTaskCommentForm = WSProjectTaskForm<WSProjectTaskComment>;
