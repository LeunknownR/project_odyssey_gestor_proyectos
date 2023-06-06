import WSConnectedCollaboratorsInProjectHandler from "./eventHandlers/utils/connectedCollaboratorsInProjectHandler";
import WSTaskBoardsHandler from "./eventHandlers/utils/taskBoardsHandler";

export default class WSProjectTaskServiceDataHandler {
    //#region Attributes
    public readonly taskBoardsHandler: WSTaskBoardsHandler;
    public readonly connectedCollaboratorsInProjectHandler: WSConnectedCollaboratorsInProjectHandler;
    //#endregion
    constructor() {
        this.connectedCollaboratorsInProjectHandler = new WSConnectedCollaboratorsInProjectHandler();
        this.taskBoardsHandler = new WSTaskBoardsHandler();
    }
}