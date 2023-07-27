import { Server } from "socket.io";
import { WSService } from "../../utils/common";
import WSServicePaths from "../../utils/services";

export default class WSNotificationService extends WSService {
    constructor(io: Server) {
        super(io.of(WSServicePaths.Notifications));
    }
    config(): void {
    }
    init(): void {
    }

}