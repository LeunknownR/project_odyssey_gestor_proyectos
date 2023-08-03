import { useEffect } from "react";
import { Socket } from "socket.io-client";
import { DBRoles } from "src/config/roles";
import WSServicePaths from "src/services/websockets/services";
import WSNotificationServiceEvents from "src/services/websockets/services/notifications/events";
import useUserRole from "src/storage/hooks/useUserRole";
import useWebsocket from "src/utils/hooks/useWebsocket";

const useNotificationService = (
    openEndedSessionModal: (content: string) => void 
): void => {
    const socketHandler = useWebsocket(WSServicePaths.Notifications);
    const userRole = useUserRole();
    useEffect(() => {
        if (userRole !== DBRoles.Collaborator) return;
        initService();
        return socketHandler.disconnect;
    }, [userRole]);
    const initService = (): void => {
        const socketIoValue: Socket = socketHandler.connect();
        socketIoValue.on(
            WSNotificationServiceEvents.Server.CloseCollaboratorSession,
            () => openEndedSessionModal("Su sesión ha finalizado, lo sentimos. Comuníquese con el administrador, por favor.")
        );
    };
}

export default useNotificationService;