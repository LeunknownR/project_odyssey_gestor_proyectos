import UserImage from "src/views/components/UserImage/UserImage";
import { Collaborator, Container, Content, Date, NameDateWrapper, Wrapper } from "./styles";
import { UserMessageProps } from "./types";
import { getHour } from "src/utils/dates";
import { getUserId } from "src/storage/user.local";

const UserMessage = ({
    className, content,
    datetime, name,
    surname, urlPhoto,
    id, size
}: UserMessageProps) => {
    return (
        <Container className={className} align="center" gap="12px">
            <UserImage className={size} name={name} surname={surname} urlPhoto={urlPhoto} />
            <Wrapper direction="column" gap="4px">
                <NameDateWrapper gap="8px">
                    <Collaborator>
                        {id === getUserId() ? "Tú" : `${name} ${surname}`}
                    </Collaborator>
                    <Date>{getHour(datetime)}</Date>
                </NameDateWrapper>
                <Content>{content}</Content>
            </Wrapper>
        </Container>
    );
};

export default UserMessage;
