import { Socket } from "socket.io";
import { getWSUserData } from "../../../../utils/helpers";
import WSChatTab from "../../utils/enums";
import WSSearchChatPreviewPayload from "../../utils/entities/searchChatPreviewPayload";
import WSChatServiceEvents from "../../events";
import { PrivateChatPreview } from "../../../../../entities/chats/chatPreview/privateChatPreview";
import { ProjectChatPreview } from "../../../../../entities/chats/chatPreview/projectChatPreview";
import WSChatServiceDataHandler from "../../dataHandlers";
import ChatController from "../../../../../controllers/chatController/chat.controller";

export default class SearchChat {
    private dataHandler: WSChatServiceDataHandler;
    private socket: Socket;
    private collaboratorId: number;
    private searchChatPreviewPayload: WSSearchChatPreviewPayload;
    constructor(dataHandler: WSChatServiceDataHandler, socket: Socket, body: any) {
        this.dataHandler = dataHandler;
        this.socket = socket;
        this.collaboratorId = getWSUserData(socket).userId;
        this.searchChatPreviewPayload = new WSSearchChatPreviewPayload(body);
    }
    async searchChat(): Promise<void> {
        const { chatTab } = this.searchChatPreviewPayload;
        switch (chatTab) {
            case WSChatTab.Private:
                this.searchPrivateChatPreview();
                break;
            case WSChatTab.Project:
                this.searchProjectChatPreview();
                break;
        }
    }
    private async getPrivateChatPreview(): Promise<PrivateChatPreview[]> {
        const { collaboratorId, searchChatPreviewPayload } = this;
        const { searchedChat } = searchChatPreviewPayload;
        // Verificando si es una cadena vacía
        if (!searchedChat)
            return await ChatController.getPrivateChatPreviewWithMessages(collaboratorId);
        return await ChatController.searchPrivateChatPreview(collaboratorId, searchedChat);
    }
    private async searchPrivateChatPreview(): Promise<void> {
        const { socket, collaboratorId } = this;
        // Obtener preview list de chats de la bd
        const newPrivateChatPreviewList: PrivateChatPreview[] = await this.getPrivateChatPreview();
        // Agregando preview list a la memoria
        this.dataHandler
            .privateChatPreviewGroup
            .addPreviewChat(
                collaboratorId,
                newPrivateChatPreviewList
            );
        // Enviar preview list al colaborador
        socket.emit(
            WSChatServiceEvents.Server.DispatchPrivateChatPreview,
            newPrivateChatPreviewList
        );
    }
    private async getProjectChatPreview(): Promise<ProjectChatPreview[]> {
        const { 
            collaboratorId, 
            searchChatPreviewPayload 
        } = this;
        const searchProjectChatPreviewList: ProjectChatPreview[] = await ChatController.searchProjectChatPreview(collaboratorId, searchChatPreviewPayload.searchedChat);
        return searchProjectChatPreviewList;
    }
    private async searchProjectChatPreview(): Promise<void> {
        const { socket, collaboratorId } = this;
        const newProjectChatPreviewList: ProjectChatPreview[] = await this.getProjectChatPreview();
        // Agregando preview list a la memoria
        this.dataHandler
            .projectChatPreviewGroup
            .addPreviewChat(
                collaboratorId,
                newProjectChatPreviewList
            );
        // Enviar preview list al colaborador
        socket.emit(
            WSChatServiceEvents.Server.DispatchProjectChatPreview,
            newProjectChatPreviewList
        );
    }
}