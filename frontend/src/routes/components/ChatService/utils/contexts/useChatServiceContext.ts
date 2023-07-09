import { useContext } from "react";
import ChatServiceContext from "./ChatServiceContext";

const useChatServiceContext = () => {
    return useContext(ChatServiceContext);
};

export default useChatServiceContext;
