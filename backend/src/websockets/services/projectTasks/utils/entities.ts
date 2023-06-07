import { ProjectState } from "../../../../entities/project/enums";
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

export type WSChangeProjectTaskState = {
    taskId: number;
    state: ProjectState;
};
export type WSDeleteProjectTask = Omit<WSChangeProjectTaskState, "state">;
export type WSProjectTaskComment = {
    taskId: number;
    content: string;
};
export type WSProjectTaskForm<T
    extends WSNewProjectTask | WSProjectTaskToBeUpdated | WSChangeProjectTaskState | WSDeleteProjectTask> = {
        collaboratorId: number;
        projectId: number;
        payload: T;
    };
export type WSNewProjectTaskForm = WSProjectTaskForm<WSNewProjectTask>;
export type WSProjectTaskToBeUpdatedForm = WSProjectTaskForm<WSProjectTaskToBeUpdated>;
export type WSChangeProjectTaskStateForm = WSProjectTaskForm<WSChangeProjectTaskState>;
export type WSDeleteProjectTaskForm = WSProjectTaskForm<WSDeleteProjectTask>;
export type WSProjectTaskCommentForm = WSProjectTaskForm<WSProjectTaskComment>;
