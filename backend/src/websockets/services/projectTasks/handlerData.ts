import WSConnectedCollaboratorsInProjectHandler from "./eventHandlers/utils/connectedCollaboratorsInProjectHandler";
import WSTaskBoardsHandler from "./eventHandlers/utils/taskBoardsHandler";

export default class WSProjectTaskServiceDataHandler {
    public readonly taskBoardsHandler: WSTaskBoardsHandler;
    public readonly connectedCollaboratorsInProjectHandler: WSConnectedCollaboratorsInProjectHandler;
    constructor() {
        this.connectedCollaboratorsInProjectHandler = new WSConnectedCollaboratorsInProjectHandler();
        this.taskBoardsHandler = new WSTaskBoardsHandler();
    }
    public addTask(newTask: string): void {
    }
}