import WSChatServiceConnectedCollaborators from "./handlers/connectedCollaboratorsInChatService";
import WSPrivateChatPreviewGroup from "./handlers/privateChatPreviewGroup";

export default class WSChatServiceDataHandler {
    //#region Attributes
    readonly connectedCollaborators: WSChatServiceConnectedCollaborators;
    readonly privateChatPreviewGroup: WSPrivateChatPreviewGroup;
    //#endregion
    constructor() {
        this.connectedCollaborators = new WSChatServiceConnectedCollaborators();
    }
}