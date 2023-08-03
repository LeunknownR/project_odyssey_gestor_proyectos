import WSNotificationServiceConnectedCollaborators from "./handlers/WSNotificationServiceConnectedCollaborators";

export default class WSNotificationServiceDataHandler {
    //#region Attributes
    readonly connectedCollaborators: WSNotificationServiceConnectedCollaborators;
    //#endregion
    constructor() {
        this.connectedCollaborators = new WSNotificationServiceConnectedCollaborators();
    }
}