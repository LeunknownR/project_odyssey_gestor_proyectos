import WSChatTab from "src/services/websockets/services/chats/utils/enums";

export type ChatTabsProps = {
    showPrivateChatPreview: () => void;
    showProjectChatPreview: () => void;
    currentTab: WSChatTab;
}
export type TabsContentProps = {
    text: string
}