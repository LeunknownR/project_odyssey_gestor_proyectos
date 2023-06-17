import { ProjectTaskState } from "src/entities/projectTasks/entities";
import { WSUserData } from "src/services/websockets/types";

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
export type WSProjectTaskToBeChangedState = {
    taskId: number;
    state: ProjectTaskState;
};
export type WSProjectTaskComment = {
    taskId: number;
    content: string;
};