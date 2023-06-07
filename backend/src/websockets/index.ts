import { Server } from "socket.io";
import WSProjectTaskService from "./services/projectTasks";

export default class IOServiceHandler {
    private wsProjectTaskService: WSProjectTaskService;
    constructor(io: Server) {
        this.wsProjectTaskService = new WSProjectTaskService(io);
    }
    public config() {
        this.wsProjectTaskService.config();
    }
    public init() {
        this.wsProjectTaskService.init();
    }
}