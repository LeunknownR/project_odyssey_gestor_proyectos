import { RefObject } from "react";
import { Socket } from "socket.io-client";
import { PreloaderHook } from "src/components/Preloader/types";

export type InitTaskBoardContext = {
    socketIo: Socket | null;
    projectId: number;
    isTaskMenuOpen: boolean;
    modifyMenuRef: RefObject<HTMLElement> | null;
    preloader: PreloaderHook | null;
};