import { FlexFlow } from "src/components/styles";
import UserImage from "src/views/components/UserImage/UserImage";
import { Collaborator, Container, Content, Date } from "./styles";
import { CommentProps } from "./types";
import { messageDateFormat } from "src/utils/dates";
import { getUserId } from "src/storage/user.local";

const Comment = ({ comment }: CommentProps) => {
    const { content, datetime, collaborator } = comment;
    return (
        <Container align="center" gap="12px">
            <UserImage
                name={collaborator.name}
                surname={collaborator.surname}
                urlPhoto={collaborator.urlPhoto}
            />
            <FlexFlow direction="column" gap="4px">
                <FlexFlow gap="8px">
                    <Collaborator>
                        {collaborator.id === getUserId() 
                            ? "Tú" 
                            : `${collaborator.name} ${collaborator.surname}`}
                    </Collaborator>
                    <Date>{messageDateFormat(datetime)}</Date>
                </FlexFlow>
                <Content>{content}</Content>
            </FlexFlow>
        </Container>
    );
};

export default Comment;
