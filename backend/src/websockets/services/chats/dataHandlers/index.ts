import WSChatServiceConnectedCollaborators from "./handlers/connectedCollaboratorsInChatService";
import { WSPrivateChatMessagesGroup } from "./handlers/privateChatMessagesGroup";
import WSPrivateChatPreviewGroup from "./handlers/privateChatPreviewGroup";
import { WSOpenPrivateChats } from "./handlers/privateChatsOpen";
import { WSProjectChatMessagesGroup } from "./handlers/projectChatMessagesGroup";
import WSProjectChatPreviewGroup from "./handlers/projectChatPreviewGroup";
import { WSOpenProjectChats } from "./handlers/projectChatsOpen";

export default class WSChatServiceDataHandler {
    //#region Attributes
    readonly connectedCollaborators: WSChatServiceConnectedCollaborators;
    readonly privateChatPreviewGroup: WSPrivateChatPreviewGroup;
    readonly projectChatPreviewGroup: WSProjectChatPreviewGroup;
    readonly privateChatMessagesGroup: WSPrivateChatMessagesGroup;
    readonly projectChatMessagesGroup: WSProjectChatMessagesGroup;
    readonly openPrivateChats: WSOpenPrivateChats;
    readonly openProjectChats: WSOpenProjectChats;
    //#endregion
    constructor() {
        this.connectedCollaborators = new WSChatServiceConnectedCollaborators();
        this.projectChatPreviewGroup = new WSProjectChatPreviewGroup();
        this.projectChatMessagesGroup = new WSProjectChatMessagesGroup();
        this.openProjectChats = new WSOpenProjectChats();
    }
}