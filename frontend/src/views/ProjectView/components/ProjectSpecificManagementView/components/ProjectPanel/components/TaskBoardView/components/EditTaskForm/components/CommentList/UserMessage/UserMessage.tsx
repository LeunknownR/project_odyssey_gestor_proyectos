import UserImage from "src/views/components/UserImage/UserImage";
import { Collaborator, Container, Content, Date, NameDateWrapper, Wrapper } from "./styles";
import { UserMessageProps } from "./types";
import { messageDateFormat } from "src/utils/dates";
import { getUserId } from "src/storage/user.local";

const UserMessage = ({
    className, content,
    datetime, name,
    surname, urlPhoto,
    id, size
}: UserMessageProps) => {
    //GNOMO PREGUNTAR A MANUEL SI CREAR UN NUEVO USERIMAGE PARA PONER EL AVISO DE NUEVO CHAT (BOLA ROJA SOBRE IMAGEN)
    //SEPARo y paso image y hago el datetimelabel
    return (
        <Container className={className} align="center" gap="12px">
            <UserImage className={size} name={name} surname={surname} urlPhoto={urlPhoto} />
            <Wrapper direction="column" gap="4px">
                <NameDateWrapper gap="8px">
                    <Collaborator>
                        {id === getUserId() ? "Tú" : `${name} ${surname}`}
                    </Collaborator>
                    <Date>{messageDateFormat(datetime)}</Date>
                </NameDateWrapper>
                <Content>{content}</Content>
            </Wrapper>
        </Container>
    );
};

export default UserMessage;
