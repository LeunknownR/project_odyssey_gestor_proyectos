import { Server } from "socket.io";
import WSProjectTaskService from "./services/projectTasks";
import WSChatService from "./services/chats";

export default class WSServiceHandler {
    readonly projectTaskService: WSProjectTaskService;
    readonly chatService: WSChatService;
    constructor(io: Server) {
        this.projectTaskService = new WSProjectTaskService(io);
        this.chatService = new WSChatService(io);
    }
    public config() {
        this.projectTaskService.config();
        this.chatService.config();
    }
    public init() {
        this.projectTaskService.init();
        this.chatService.init();
    }
}