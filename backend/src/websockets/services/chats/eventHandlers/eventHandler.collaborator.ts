import { Socket } from "socket.io";
import { IOServerService, WSEvent, WSServiceEventHandler } from "../../../utils/common";
import WSChatServiceEvents from "../events";
import WSChatServiceDataHandler from "../dataHandlers";
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
                ).getMessages()
            },
            {
                name: WSChatServiceEvents.Collaborator.GetProjectChatMessages,
                handler: (socket, body) => new GetProjectChatMessages(
                    dataHandler, socket, body
                ).getMessages()
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