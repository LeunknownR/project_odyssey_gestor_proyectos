import { Server } from "socket.io";
import WSProjectTaskService from "./services/projectTasks";
import WSChatService from "./services/chats";
import WSNotificationService from "./services/notifications";

export default class WSServiceHandler {
    readonly projectTaskService: WSProjectTaskService;
    readonly chatService: WSChatService;
    readonly notificationService: WSNotificationService;
    constructor(io: Server) {
        this.projectTaskService = new WSProjectTaskService(io);
        this.chatService = new WSChatService(io);
        this.notificationService = new WSNotificationService(io);
    }
    config() {
        this.projectTaskService.config();
        this.chatService.config();
        this.notificationService.config();
    }
    init() {
        this.projectTaskService.init();
        this.chatService.init();
        this.notificationService.init();
    }
}