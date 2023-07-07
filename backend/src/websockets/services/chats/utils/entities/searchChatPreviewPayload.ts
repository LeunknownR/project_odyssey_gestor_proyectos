import WSChatTab from "../enums";
import { WSSearchedChat } from "./searchedChat";

export default class WSSearchChatPreviewPayload {
    //#region Attributes
    private _searchedChat: WSSearchedChat;
    readonly chatTab: WSChatTab;
    //#endregion
    //#region Constants
    constructor({
        searchedChat: searchedChat,
        chatTab
    }: any) {
        this._searchedChat = new WSSearchedChat(searchedChat);
        if (!Object.values(WSChatTab).includes(chatTab))
            throw new Error("Invalid chat tab");
        this.chatTab = chatTab;
    }
    //#endregion
    //#region Methods
    get searchedChat(): string {
        return this._searchedChat.value;
    }
    //#endregion
}