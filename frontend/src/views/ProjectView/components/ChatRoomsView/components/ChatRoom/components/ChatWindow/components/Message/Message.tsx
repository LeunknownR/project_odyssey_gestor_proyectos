import { messageDateFormat } from "src/utils/dates";
import { Container, Sender, Text, Timestamp } from "./styles";
import { MessageProps } from "./types";

const Message = ({ className, sender, text, datetime }: MessageProps) => {
    return (
        <Container direction="column" gap="8px" className={className}>
            <Sender className={className}>{sender}</Sender>
            <Text className={className}>
                {text}
            </Text>
            <Timestamp className={className}>{messageDateFormat(datetime)}</Timestamp>
        </Container>
    );
};

export default Message;
