namespace WSChatServiceEvents {
    export enum Server {
        DispatchPrivateChatPreview = "server:dispatch-private-chat-preview",
        DispatchProjectChatPreview = "server:dispatch-project-chat-preview",
        DispatchPrivateChatMessages = "server:dispatch-private-chat-messages",
        DispatchProjectChatMessages = "server:dispatch-project-chat-messages",
        NotifyUnreadPrivateChats = "server:notify-unread-private-chats",
        NotifyUnreadProjectChats = "server:notify-unread-project-chats",
        NotifyCollaboratorOnlineState = "server:notify-collaborator-online-state",
        NotifySentMessage = "server:notify-sent-message"
    }
    export enum Collaborator {
        SearchChat = "collaborator:search-chat",
        GetPrivateChatMessages = "collaborator:get-private-chat-messages",
        GetProjectChatMessages = "collaborator:get-project-chat-messages",
        LeavePrivateChat = "collaborator:leave-private-chat",
        LeaveProjectChat = "collaborator:leave-project-chat",
        SendMessageToPrivateChat = "collaborator:send-message-to-private-chat",
        SendMessageToProjectChat = "collaborator:send-message-to-project-chat"
    }
}

export default WSChatServiceEvents;