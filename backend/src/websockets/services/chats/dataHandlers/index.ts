import WSChatServiceConnectedCollaborators from "./handlers/connectedCollaboratorsInChatService";
import WSPrivateChatHasMessagesGroup from "./handlers/privateChatHasMessagesGroup";
import { WSPrivateChatMessagesGroup } from "./handlers/privateChatMessagesGroup";
import WSPrivateChatPreviewGroup from "./handlers/privateChatPreviewGroup";
import { WSOpenPrivateChats } from "./handlers/privateChatsOpen";
import { WSProjectChatMessagesGroup } from "./handlers/projectChatMessagesGroup";

export default class WSChatServiceDataHandler {
    //#region Attributes
    readonly connectedCollaborators: WSChatServiceConnectedCollaborators;
    readonly privateChatPreviewGroup: WSPrivateChatPreviewGroup;
    readonly privateChatMessagesGroup: WSPrivateChatMessagesGroup;
    readonly projectChatMessagesGroup: WSProjectChatMessagesGroup;
    readonly openPrivateChats: WSOpenPrivateChats;
    readonly privateChatHasMessagesGroup: WSPrivateChatHasMessagesGroup;
    //#endregion
    constructor() {
        this.connectedCollaborators = new WSChatServiceConnectedCollaborators();
    }
}