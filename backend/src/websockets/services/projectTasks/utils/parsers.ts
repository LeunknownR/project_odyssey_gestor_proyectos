import { ProjectState } from "../../../../entities/project/enums";
import { isArrayString, isPositiveArrayNumber } from "../../../../utils/arrays";
import { isPositiveNumber, isPositiveNumberOrZero } from "../../../../utils/numbers";
import { checkLength } from "../../../../utils/strings";
import { 
    WSNewProjectTask, 
    WSProjectTaskToBeChangedState, 
    WSProjectTaskComment, 
    WSProjectTaskMainInformation
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
        deadline, priotityId
    } = body;
    return (
        isPositiveNumber(taskId) &&
        (isPositiveNumber(responsibleId) || responsibleId == null) &&
        checkLength(name, 1, 40) &&
        (checkLength(description, 1, 200) || description == null) &&
        isPositiveNumberOrZero(deadline) &&
        (isPositiveNumber(priotityId) || priotityId == null)
    )
}

export const parseToWSProjectTaskMainInformation = (body: any): WSProjectTaskMainInformation => {
    if (!isValidWSProjectTaskMainInformation(body))
        throw new Error("Invalid data to update task");
    const {
        taskId, responsibleId,
        name, description,
        deadline, priotityId
    } = body;
    return {
        taskId, responsibleId,
        name, description,
        deadline, priotityId
    };
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
        throw new Error("Invalid data to delete state");
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