import { ProjectState } from "../../../../entities/project/enums";
import { checkLength } from "../../../../utils/strings";
import { WSNewProjectTask } from "./entities";

export const parseToWSNewProjectTask = (body: any): WSNewProjectTask => {
    const { name, state } = body;
    if (!checkLength(name, 1, 40) || ![ProjectState.Pending, ProjectState.OnProgress].includes(state))
        throw new Error("Invalid data to add new task");
    return {
        name,
        state
    };
}