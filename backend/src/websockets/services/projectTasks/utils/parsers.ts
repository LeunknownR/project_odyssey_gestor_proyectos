import { ProjectState } from "../../../../entities/project/enums";
import { isArrayString, isPositiveArrayNumber } from "../../../../utils/arrays";
import { isPositiveNumberNonZero, isPositiveNumberOrZero } from "../../../../utils/numbers";
import { checkLength } from "../../../../utils/strings";
import { 
    WSNewProjectTask, 
    WSProjectTaskWithNewState, 
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
        isPositiveNumberNonZero(taskId) &&
        (responsibleId === null || isPositiveNumberNonZero(responsibleId)) &&
        checkLength(name, 1, 40) &&
        checkLength(description, 0, 200) &&
        (deadline === -1 || isPositiveNumberOrZero(deadline)) &&
        (priorityId === null || isPositiveNumberNonZero(priorityId))
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
        name, description: description || null,
        deadline, priorityId
    };
}
export const parseToWSNewProjectSubtask = (body: any): WSNewProjectSubtask => {
    const {
        taskId, name
    } = body;
    if (!isPositiveNumberNonZero(taskId) || !checkLength(name, 1, 50))
        throw new Error("Invalid data to create subtask");
    return {
        taskId, name
    };
}
export const parseToWSProjectSubtaskToBeUpdated = (body: any): WSProjectSubtaskToBeUpdated => {
    const {
        subtaskId, name
    } = body;
    if (!isPositiveNumberNonZero(subtaskId) || !checkLength(name, 1, 50)
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
    if (!isPositiveNumberNonZero(subtaskId) || typeof checked !== "boolean")
        throw new Error("Invalid data to switch subtask state");
    return {
        subtaskId, checked
    };
}
export const parseToWSSubtaskIdToBeDeleted = (subtaskId: any): number => {
    if (!isPositiveNumberNonZero(subtaskId))
        throw new Error("Invalid data to delete subtask ");
    return subtaskId;
}
export const parseToWSProjectTaskWithNewState = (body: any): WSProjectTaskWithNewState => {
    const {
        taskId, state
    } = body;
    if (
        !isPositiveNumberNonZero(taskId) ||
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
    if (!isPositiveNumberNonZero(taskId))
        throw new Error("Invalid data to delete task ");
    return taskId;
}
export const parseToWSProjectTaskComment = (body: any): WSProjectTaskComment => {
    const { taskId, content } = body;
    if (!isPositiveNumberNonZero(taskId) || !checkLength(content, 1, 200))
        throw new Error("Invalid data to comment in task");
    return {
        taskId,
        content
    };
}