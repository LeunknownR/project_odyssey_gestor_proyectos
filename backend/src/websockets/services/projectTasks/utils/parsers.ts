import { ProjectState } from "../../../../entities/project/enums";
import { isArrayString, isPositiveArrayNumber } from "../../../../utils/arrays";
import { isPositiveNumber, isPositiveNumberOrZero } from "../../../../utils/numbers";
import { checkLength } from "../../../../utils/strings";
import { 
    WSNewProjectTask, 
    WSProjectTaskToBeChangedState, 
    WSProjectTaskComment, 
    WSProjectTaskMainInformation,
    WSNewProjectSubtask,
    WSProjectSubtaskToBeUpdated,
    WSProjectSubtaskToBeSwitchedCheckStatus,
} from "./entities";

export const parseToWSNewProjectTask = (body: any): WSNewProjectTask => {
    const { name, state } = body;
    if (!checkLength(name, 1, 40) || ![ProjectState.Pending, ProjectState.OnProgress].includes(state))
        throw new Error("Invalid data to add new task");
    return {
        name,
        state
    };
}
const isValidWSProjectTaskMainInformation = (body: any): boolean => {
    const {
        taskId, responsibleId,
        name, description,
        deadline, priorityId
    } = body;
    return (
        isPositiveNumber(taskId) &&
        (responsibleId == null || isPositiveNumber(responsibleId)) &&
        checkLength(name, 1, 40) &&
        (description == null || checkLength(description, 1, 200)) &&
        (deadline === -1 || isPositiveNumberOrZero(deadline)) &&
        (priorityId == null || isPositiveNumber(priorityId))
    )
}
export const parseToWSProjectTaskMainInformation = (body: any): WSProjectTaskMainInformation => {
    if (!isValidWSProjectTaskMainInformation(body))
        throw new Error("Invalid data to update task");
    const {
        taskId, responsibleId,
        name, description,
        deadline, priorityId
    } = body;
    return {
        taskId, responsibleId,
        name, description,
        deadline, priorityId
    };
}
export const parseToWSNewProjectSubtask = (body: any): WSNewProjectSubtask => {
    const {
        taskId, name
    } = body;
    if (!isPositiveNumber(taskId) || !checkLength(name, 1, 50))
        throw new Error("Invalid data to create subtask");
    return {
        taskId, name
    };
}
export const parseToWSProjectSubtaskToBeUpdated = (body: any): WSProjectSubtaskToBeUpdated => {
    const {
        subtaskId, name
    } = body;
    if (!isPositiveNumber(subtaskId) || !checkLength(name, 1, 50)
    )
        throw new Error("Invalid data to update subtask");
    return {
        subtaskId, name
    };
}
export const parseToWSProjectSubtaskToBeSwitchedCheckStatus = (body: any): WSProjectSubtaskToBeSwitchedCheckStatus => {
    const {
        subtaskId, checked
    } = body;
    if (!isPositiveNumber(subtaskId) || typeof checked !== "boolean")
        throw new Error("Invalid data to switch subtask state");
    return {
        subtaskId, checked
    };
}
export const parseToWSSubtaskIdToBeDeleted = (subtaskId: any): number => {
    if (!isPositiveNumber(subtaskId))
        throw new Error("Invalid data to delete subtask ");
    return subtaskId;
}
export const parseToWSProjectTaskToBeChangedState = (body: any): WSProjectTaskToBeChangedState => {
    const {
        taskId, state
    } = body;
    if (
        !isPositiveNumber(taskId) ||
        ![
            ProjectState.Pending, 
            ProjectState.OnProgress, 
            ProjectState.Finalized
        ].includes(state)
    )
        throw new Error("Invalid data to change task state");
    return {
        taskId, state
    };
}
export const parseToWSTaskIdToBeDeleted = (taskId: any): number => {
    if (!isPositiveNumber(taskId))
        throw new Error("Invalid data to delete task ");
    return taskId;
}
export const parseToWSProjectTaskComment = (body: any): WSProjectTaskComment => {
    const { taskId, content } = body;
    if (!isPositiveNumber(taskId) || !checkLength(content, 1, 200))
        throw new Error("Invalid data to comment in task");
    return {
        taskId,
        content
    };
}