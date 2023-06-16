import { ProjectTaskState } from "./entities";

export const projectTaskBoardStateByTaskState: Record<ProjectTaskState, string> = {
    [ProjectTaskState.Pending]: "pending",
    [ProjectTaskState.OnProgress]: "onProgress",
    [ProjectTaskState.Finalized]: "finalized",
};