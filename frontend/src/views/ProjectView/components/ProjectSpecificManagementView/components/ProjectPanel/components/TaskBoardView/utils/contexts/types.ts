import { RefObject } from "react";
import { Socket } from "socket.io-client";

export type InitTaskBoardContext = {
    socketIo: Socket | null;
    projectId: number;
    isTaskMenuOpen: boolean;
    modifyMenuRef: RefObject<HTMLElement> | null;
};