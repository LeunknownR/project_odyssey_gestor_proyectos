import { FlexFlow } from "src/components/styles";
import { ChatSubtitle } from "../../../ChatRoom/components/ChatHeader/styles";
import { ConnectionBall } from "./styles";
import { ConnectionDataProps } from "./types";

const ConnectionData = ({
    isOnline
}: ConnectionDataProps) => {
    return (
        <FlexFlow gap="5px" align="center">
            <ConnectionBall
                className={isOnline ? "connected" : "disconnected"}/>
            <ChatSubtitle>
                {isOnline 
                ? "Conectado(a)" 
                : "Desconectado(a)"}
            </ChatSubtitle>
        </FlexFlow>
    );
}

export default ConnectionData;