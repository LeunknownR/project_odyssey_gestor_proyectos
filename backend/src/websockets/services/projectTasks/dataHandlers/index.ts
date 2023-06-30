import WSProjectTaskBoardConnectedCollaborators from "./handlers/projectTaskBoardConnectedCollaborators";
import WSTaskBoardGroup from "./handlers/taskBoardGroup";

export default class WSProjectTaskServiceDataHandler {
    //#region Attributes
    public readonly taskBoardGroup: WSTaskBoardGroup;
    public readonly projectTaskBoardConnectedCollaborators: WSProjectTaskBoardConnectedCollaborators;
    //#endregion
    constructor() {
        this.projectTaskBoardConnectedCollaborators = new WSProjectTaskBoardConnectedCollaborators();
        this.taskBoardGroup = new WSTaskBoardGroup();
    }
}