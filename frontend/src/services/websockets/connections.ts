import WSServicePaths from "./services";
import { WSServiceDataConnection } from "./types";

export const wsProjectTasksServiceDataConnection: WSServiceDataConnection<number> = {
    servicePath: WSServicePaths.ProjectTasks,
    getHeaders: projectId => ({
        "project-id": String(projectId)
    })
};
export const wsChatServiceDataConnection: WSServiceDataConnection<number> = {
    servicePath: WSServicePaths.Chat,
    getHeaders: userId => ({
        "user-id": String(userId),
    }),
};