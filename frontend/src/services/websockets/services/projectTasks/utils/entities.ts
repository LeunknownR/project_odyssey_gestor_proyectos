import { ProjectState } from "src/entities/project/enums";
import { ProjectTaskState } from "src/entities/projectTasks/entities";

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
    priorityId: number | null;
    newSubTask: string[];
    subTaskIdsToBeDeleted: number[];
};

export type WSProjectTaskToBeChangedState = {
    taskId: number;
    state: ProjectState;
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
export type WSProjectTaskToBeChangedStateForm = WSProjectTaskForm<WSProjectTaskToBeChangedState>;
export type WSProjectTaskToBeDeletedForm = WSProjectTaskForm<number>;
export type WSProjectTaskCommentForm = WSProjectTaskForm<WSProjectTaskComment>;