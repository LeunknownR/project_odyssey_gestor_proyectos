import { ChatPreviewProps } from "./components/ChatPreview/types";

export type ChatListProps<I> = {
    previewChatList: I[];
    renderItem: (item: I) => React.ReactElement<ChatPreviewProps>;
}