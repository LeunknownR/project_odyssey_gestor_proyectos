import { WebsocketHook } from "src/utils/hooks/types";

export type InitTaskBoardContext = {
    socketIo: WebsocketHook | null;
    projectId: number;
};