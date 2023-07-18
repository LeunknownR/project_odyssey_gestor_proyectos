import { useContext } from "react";
import ChatViewContext from "./ChatViewContext";

const useChatViewContext = () => {
    return useContext(ChatViewContext);
};

export default useChatViewContext;
