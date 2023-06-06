import { Socket } from "socket.io";
import { WSUserDataProjectTaskService } from "./entities";
import { isPositiveNumber } from "../../../../utils/numbers";
import { getUserDataBySocket } from "../../../utils/helpers";
import WSErrorMessages from "../../../utils/errorMessages";

export const getUserDataProjectTaskServiceBySocket = (socket: Socket): WSUserDataProjectTaskService => {
    const { headers } = socket.handshake;
    const { userId } = getUserDataBySocket(socket);
    const projectId: any = Number(headers["project-id"]);
    if (!isPositiveNumber(projectId)) 
        throw Error(WSErrorMessages.InvalidConnectionData);
    return { userId, projectId };
}
export abstract class WSProjectTaskServiceRoomHandler {
    public static getProjectRoom(projectId: number) {
        return `project:${projectId}`;
    }
};