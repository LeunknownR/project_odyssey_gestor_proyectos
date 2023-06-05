import { WSUserData } from "../../../utils/types";

export type WSUserDataProjectTaskService = WSUserData & {
    projectId: number;
};