import { FlexFlow } from "src/components/styles";
import UserImage from "src/views/components/UserImage/UserImage";
import { Collaborator, Container, Content, Date } from "./styles";
import { CommentProps } from "./types";

const Comment = ({ comment }: CommentProps) => {
    const { content, dateTime, collaborator } = comment;
    return (
        <Container align="center" gap="12px">
            <UserImage
                name={collaborator.name}
                surname={collaborator.surname}
                urlPhoto={collaborator.urlPhoto}
            />
            <FlexFlow direction="column" gap="4px">
                <FlexFlow gap="5px">
                    <Collaborator>
                        {collaborator.name} {collaborator.surname}
                    </Collaborator>
                    <Date>{dateTime}</Date>
                </FlexFlow>
                <Content>{content}</Content>
            </FlexFlow>
        </Container>
    );
};

export default Comment;
