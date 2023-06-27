import { Socket } from "socket.io";
import WSErrorMessages from "./errorMessages";
import { WSNext, WSUserData } from "./common";
import { isPositiveNumber } from "../../utils/numbers";

export const getWSUserData = (socket: Socket): WSUserData => {
    const { headers } = socket.handshake;
    const userId: any = Number(headers["user-id"]);
    if (!isPositiveNumber(userId)) 
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