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
    priorityId: number | null;
};
export type WSNewProjectSubtask = {
	taskId: number;
	name: string;
};
export type WSProjectSubtaskToBeUpdated = {
	subtaskId: number;
	name: string;
};
export type WSProjectSubtaskToBeSwitchedCheckStatus = {
	subtaskId: number;
    checked: boolean;
};
export type WSProjectTaskWithNewState = {
    taskId: number;
    state: ProjectState;
};
export type WSProjectTaskComment = {
    taskId: number;
    content: string;
};
export type WSProjectTaskForm<T = null> = {
    collaboratorId: number;
    projectId: number;
    payload: T;
};
export type WSNewProjectTaskForm = WSProjectTaskForm<WSNewProjectTask>;
export type WSProjectTaskMainInformationForm = WSProjectTaskForm<WSProjectTaskMainInformation>;
export type WSSubtaskToBeUpdatedForm = WSProjectTaskForm<WSProjectSubtaskToBeUpdated>;
export type WSSubtaskToBeSwitchedCheckStatusForm = WSProjectTaskForm<WSProjectSubtaskToBeSwitchedCheckStatus>;
export type WSNewProjectSubtaskForm = WSProjectTaskForm<WSNewProjectSubtask>;
export type WSProjectTaskWithNewStateForm = WSProjectTaskForm<WSProjectTaskWithNewState>;
export type WSProjectSubtaskToBeDeletedForm = WSProjectTaskForm<number>;
export type WSProjectTaskToBeDeletedForm = WSProjectTaskForm<number>;
export type WSProjectTaskCommentForm = WSProjectTaskForm<WSProjectTaskComment>;