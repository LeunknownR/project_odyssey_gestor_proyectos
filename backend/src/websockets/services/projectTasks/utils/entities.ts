import { ProjectState } from "../../../../entities/project/enums";
import { ProjectTaskState } from "../../../../entities/projectTasks/entities";
import { WSUserData } from "../../../utils/common";

export type WSUserDataProjectTaskService = WSUserData & {
    projectId: number;
};
export type WSNewProjectTask = {
    name: string;
    state: ProjectTaskState;
};
export type WSProjectTaskMainInformation = {
    taskId: number;
    responsibleId: number | null;
    name: string;
    description: string | null;
    deadline: number;
    priotityId: number | null;
};
export type WSNewSubtask = {
	taskId: number;
	name: string;
};
export type WSSubtaskToBeUpdated = {
	subtaskId: number;
	name: string;
};
export type WSSubtaskToBeSwitchedCheckStatus = {
	subtaskId: number;
    checked: boolean;
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
export type WSProjectTaskMainInformationForm = WSProjectTaskForm<WSProjectTaskMainInformation>;
export type WSSubtaskToBeUpdatedForm = WSProjectTaskForm<WSSubtaskToBeUpdated>;
export type WSSubtaskToBeSwitchedCheckStatusForm = WSProjectTaskForm<WSSubtaskToBeSwitchedCheckStatus>;
export type WSProjectTaskToBeChangedStateForm = WSProjectTaskForm<WSProjectTaskToBeChangedState>;
export type WSProjectSubtaskToBeDeletedForm = WSProjectTaskForm<number>;
export type WSProjectTaskToBeDeletedForm = WSProjectTaskForm<number>;
export type WSProjectTaskCommentForm = WSProjectTaskForm<WSProjectTaskComment>;
