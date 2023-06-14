import { Socket } from "socket.io";
import { ExtendedError } from "socket.io/dist/namespace";
import WSErrorMessages from "./errorMessages";
import { WSUserData } from "./common";
import { isPositiveNumber } from "../../utils/numbers";

export const getUserDataBySocket = (socket: Socket): WSUserData => {
    const { headers } = socket.handshake;
    const userId: any = Number(headers["user-id"]);
    if (!isPositiveNumber(userId)) 
        throw Error(WSErrorMessages.InvalidConnectionData);
    return { userId };
}
export const rejectConnection = (
    socket: Socket, 
    next: (err?: ExtendedError) => void,
    error: string
): void => {
    socket.disconnect();
    next(new Error(error));
}