import { PrivateChatPreview } from "../../entities/chats/privateChatPreview";
import ChatModel from "../../models/chatModel/chat.model";
import { IntegerId } from "../../utils/entities/integerId";
import WSSearchPrivateChatPreviewPayload from "../../websockets/services/chats/utils/entities/searchPrivateChatPreviewPayload";

export default abstract class ChatController {
    static async searchPrivateChatPreviewList(getPrivateChatPreviewPayload: WSSearchPrivateChatPreviewPayload): Promise<PrivateChatPreview[]> {
        const resultset: any[] = await ChatModel.searchPrivateChatPreviewList(getPrivateChatPreviewPayload);
        return resultset.map(record => new PrivateChatPreview(record));
    }
    static async getPrivateChatPreviewListWithMessages(collaboratorId: number): Promise<PrivateChatPreview[]> {
        const resultset: any[] = await ChatModel.getPrivateChatPreviewListWithMessages(collaboratorId);
        return resultset.map(record => new PrivateChatPreview(record));
    }
}