import DBConnection from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";
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
    static async getPrivateChatPreviewListWithMessages(collaboratorId: number): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.SearchCollaboratorChatsWithMessages, 
            [collaboratorId]
        );
        return resultset;
    }
}