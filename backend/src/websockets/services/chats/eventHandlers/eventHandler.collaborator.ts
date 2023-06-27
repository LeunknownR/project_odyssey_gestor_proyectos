import { Socket } from "socket.io";
import { IOServerService, WSEvent, WSServiceEventHandler } from "../../../utils/common";
import WSChatServiceEvents from "../events";
import WSChatServiceDataHandler from "../dataHandlers";
import { getWSUserData } from "../../../utils/helpers";
import WSSearchPrivateChatPreviewPayload from "../utils/entities/searchPrivateChatPreviewPayload";
import ChatController from "../../../../controllers/chatController/chat.controller";
import WSSearchChatPreviewPayload from "../utils/entities/searchChatPreviewPayload";
import WSChatTab from "../utils/enums";
import { PrivateChatPreview } from "../../../../entities/chats/privateChatPreview";

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
        const wsEventList: WSEvent<WSChatServiceEvents.Collaborator>[] = [
            {
                name: WSChatServiceEvents.Collaborator.SearchChat,
                handler: this.searchChat.bind(this)
            }
        ];
        this.configSocket(socket, wsEventList);
    }
    private async getPrivateChatPreview(
        searchedCollaborator: string, 
        collaboratorId: number
    ): Promise<PrivateChatPreview[]> {
        // Verificando si es una cadena vacía
        if (searchedCollaborator) 
            return await ChatController.getPrivateChatPreviewListWithMessages(collaboratorId);
        const getPrivateChatPreviewPayload: WSSearchPrivateChatPreviewPayload = new WSSearchPrivateChatPreviewPayload(
            collaboratorId,
            searchedCollaborator
        );
        return await ChatController.searchPrivateChatPreviewList(getPrivateChatPreviewPayload);
    }
    private async processSearchingAsPrivateChatPreview(
        socket: Socket,
        searchChatPreviewPayload: WSSearchChatPreviewPayload
    ): Promise<void> {
        const { userId: collaboratorId } = getWSUserData(socket);
        // Obtener preview de chats de la bd
        const newPrivateChatPreviewList: PrivateChatPreview[] = await this.getPrivateChatPreview(searchChatPreviewPayload.searchedChat, collaboratorId);
        // Agregando preview a la memoria
        this.dataHandler
            .privateChatPreviewGroup
            .addPreviewChat(
                collaboratorId, 
                newPrivateChatPreviewList
            );
        // Enviar preview al colaborador
        socket.emit(
            WSChatServiceEvents.Server.DispatchPrivateChatPreview,
            newPrivateChatPreviewList
        );
    }
    private async processSearchingAsProjectChatPreview(
        socket: Socket,
        // Otros parámetros
    ): Promise<void> {
        
    }
    private async searchChat(socket: Socket, body: any) {
        const searchChatPreviewPayload = new WSSearchChatPreviewPayload(body);
        switch (searchChatPreviewPayload.chatTab) {
            case WSChatTab.Private:
                this.processSearchingAsPrivateChatPreview(
                    socket,
                    searchChatPreviewPayload
                );
                return;
            case WSChatTab.Project:
                this.processSearchingAsProjectChatPreview(
                    socket
                );
                return;
        }
    }
    //#endregion
}