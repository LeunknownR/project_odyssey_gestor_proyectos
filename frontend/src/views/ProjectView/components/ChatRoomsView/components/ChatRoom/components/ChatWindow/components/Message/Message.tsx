import { formatTime, getDayMonthYearTwoDigitsFormat, getHour } from "src/utils/dates";
import { Container, Sender, Text, Timestamp } from "./styles";
import { MessageProps } from "./types";

const Message = ({ className, sender, text, datetime }: MessageProps) => {
    return (
        <Container direction="column" gap="8px" className={className}>
            {sender && <Sender className={className}>{sender}</Sender>}
            <Text className={className}>
                {text}
            </Text>
            <Timestamp className={className}>
                {getDayMonthYearTwoDigitsFormat(datetime)} <b>{formatTime(datetime)}</b>
            </Timestamp>
        </Container>
    );
};

export default Message;
