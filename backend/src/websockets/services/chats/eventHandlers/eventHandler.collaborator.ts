import { Socket } from "socket.io";
import { IOServerService, WSEvent, WSServiceEventHandler } from "../../../utils/common";
import WSChatServiceEvents from "../events";
import WSChatServiceDataHandler from "../dataHandlers";
import { getWSUserData } from "../../../utils/helpers";
import ChatController from "../../../../controllers/chatController/chat.controller";
import WSSearchChatPreviewPayload from "../utils/entities/searchChatPreviewPayload";
import WSChatTab from "../utils/enums";
import { PrivateChatPreview } from "../../../../entities/chats/chatPreview/privateChatPreview";
import { IntegerId } from "../../../../utils/entities/integerId";
import PrivateChatMessage from "../../../../entities/chats/chatMessage/privateChatMessage";
import ProjectChatMessage from "../../../../entities/chats/chatMessage/projectChatMessage";
import { WSChatServiceRoom } from "../utils/helpers";
import { WSPrivateChatMessagesGroup } from "../dataHandlers/handlers/privateChatMessagesGroup";
import { RelationCollaboratorChat } from "../../../../entities/chats/chatMessage/chatCollaboratorRelation";
import { CollaboratorProjectChatMessage, FormattedPrivateChatMessages } from "../../../../entities/chats/entities";
import FormattedProjectChatMessages from "../../../../entities/chats/chatMessage/formattedProjectChatMessage";
import { ProjectChatPreview } from "../../../../entities/chats/chatPreview/projectChatPreview";
import WSProjectMessage from "../utils/entities/projectMessage";
import SendPrivateChatMessage from "./cases/SendPrivateChatMessage";
import SendProjectChatMessage from "./cases/SendProjectChatMessage";
import SearchChat from "./cases/SearchChat";
import GetPrivateChatMessages from "./cases/GetPrivateChatMessages";
import GetProjectChatMessages from "./cases/GetProjectChatMessages";

export default class WSChatServiceCollaboratorEventHandler extends WSServiceEventHandler<WSChatServiceEvents.Collaborator> {
    //#region Attributes
    private dataHandler: WSChatServiceDataHandler;
    //#endregion
    constructor(io: IOServerService, dataHandler: WSChatServiceDataHandler) {
        super(io);
        this.dataHandler = dataHandler;
    }
    //#region Methods
    listen(socket: Socket) {
        const { io, dataHandler } = this;
        const wsEventList: WSEvent<WSChatServiceEvents.Collaborator>[] = [
            {
                name: WSChatServiceEvents.Collaborator.SearchChat,
                handler: (socket, body) => new SearchChat(
                    dataHandler, socket, body
                ).searchChat()
            },
            {
                name: WSChatServiceEvents.Collaborator.GetPrivateChatMessages,
                handler: (socket, body) => new GetPrivateChatMessages(
                    io, dataHandler, socket, body
                ).getPrivateChatMessages()
            },
            {
                name: WSChatServiceEvents.Collaborator.GetProjectChatMessages,
                handler: (socket, body) => new GetProjectChatMessages(
                    dataHandler, socket, body
                ).getProjectChatMessages()
            },
            {
                name: WSChatServiceEvents.Collaborator.SendMessageToPrivateChat,
                handler: (socket, body) => new SendPrivateChatMessage(
                    io, dataHandler, socket, body
                ).sendMessage()
            },
            {
                name: WSChatServiceEvents.Collaborator.SendMessageToProjectChat,
                handler: (socket, body) => new SendProjectChatMessage(
                    io, dataHandler, socket, body
                ).sendMessage()
            }
        ];
        this.configSocket(socket, wsEventList);
    }
    
    //#endregion
}