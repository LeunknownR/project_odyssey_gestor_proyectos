import WSConnectedCollaboratorsInProjectHandler from "./connectedCollaboratorsInProjectHandler";
import WSTaskBoardsHandler from "./taskBoardsHandler";

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