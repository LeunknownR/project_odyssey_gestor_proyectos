import { Socket } from "socket.io";
import WSErrorMessages from "./errorMessages";
import { WSNext, WSUserData } from "./common";
import { isPositiveNumberNonZero } from "../../utils/numbers";

export const getWSUserData = (socket: Socket): WSUserData => {
    const { headers } = socket.handshake;
    const userId: any = Number(headers["x-user-id"]);
    if (!isPositiveNumberNonZero(userId)) 
        throw Error(WSErrorMessages.InvalidConnectionData);
    return { userId };
}
export const rejectConnection = (
    socket: Socket, 
    next: WSNext,
    error: string
): void => {
    socket.disconnect();
    next(new Error(error));
}