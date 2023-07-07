import DBConnection from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";
import WSPrivateMessage from "../../websockets/services/chats/utils/entities/privateMessage";
import WSProjectMessage from "../../websockets/services/chats/utils/entities/projectMessage";
import WSSearchPrivateChatPreviewPayload from "../../websockets/services/chats/utils/entities/searchPrivateChatPreviewPayload";

export default abstract class ChatModel {
    static async searchPrivateChatPreviewList({
        collaboratorId,
        searchedCollaborator
    }: WSSearchPrivateChatPreviewPayload): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.SearchCollaboratorChats,
            [
                collaboratorId,
                searchedCollaborator
            ]
        );
        return resultset;
    }
    static async searchProjectChatPreviewList(
        searchedProject: string,
        collaboratorId: number
    ): Promise<any[]> {
        console.log("La vaca lola")
        const [resultset] = await DBConnection.query(
            StoredProcedures.SearchCollaboratorChats,
            [
                collaboratorId,
                searchedProject
            ]
        );
        return resultset;
    }
    static async getPrivateChatPreviewListWithMessages(projectId: number): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.SearchCollaboratorChatsWithMessages,
            [projectId]
        );
        return resultset;
    }
    static async getRelationCollaboratorInPrivateChat(
        collaboratorId: number, 
        collaboratorChatId: number
    ): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetRelationCollaboratorInPrivateChat,
            [collaboratorId, collaboratorChatId]
        );
        return resultset;
    }
    static async getPrivateChatMessages(collaboratorId: number, collaboratorChatId: number): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetPrivateChatMessages,
            [collaboratorId, collaboratorChatId]
        );
        return resultset;
    }
    static async getProjectChatMessages(projectId: number): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectChatMessages,
            [projectId]
        );
        return resultset;
    }
    static async markPrivateChatMessagesAsSeen(
        collaboratorId: number,
        collaboratorChatId: number
    ): Promise<number> {
        const { affectedRows } = await DBConnection.query(
            StoredProcedures.MarkPrivateChatMessagesAsSeen,
            [collaboratorId, collaboratorChatId]
        );
        return affectedRows;
    }
    static async markProjectChatMessagesAsSeen(
        collaboratorId: number,
        projectId: number
    ): Promise<number> {
        const { affectedRows } = await DBConnection.query(
            StoredProcedures.MarkProjectChatMessagesAsSeen,
            [collaboratorId, projectId]
        );
        return affectedRows;
    }
    static async sendMessageToPrivateChat(
        senderId: number,
        {
            receiverId,
            content
        }: WSPrivateMessage
    ): Promise<any> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.SendMessageToPrivateChat,
            [senderId, receiverId, content]
        );
        return record;
    }
    static async collaboratorHasUnreadPrivateChats(collaboratorId: number): Promise<any> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.CollaboratorHasUnreadPrivateChats,
            [collaboratorId]
        );
        return record;
    }
    static async collaboratorHasUnreadProjectChats(collaboratorId: number): Promise<any> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.CollaboratorHasUnreadProjectChats,
            [collaboratorId]
        );
        return record;
    }
    static async sendMessageToProjectChat(
        senderId: number,
        {
            projectId,
            content
        }: WSProjectMessage
    ): Promise<any> {
        console.log("Entra")
        const [[record]] = await DBConnection.query(
            StoredProcedures.SendMessageToProjectChat,
            [senderId, projectId, content]
        );
        console.log("Sale")
        return record;
    }
}