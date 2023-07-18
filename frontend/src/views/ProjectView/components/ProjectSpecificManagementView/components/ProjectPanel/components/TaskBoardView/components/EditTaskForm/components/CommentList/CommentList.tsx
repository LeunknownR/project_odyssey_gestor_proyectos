import { FlexFlow } from "src/components/styles";
import { List } from "./styles";
import { Label } from "../TaskForm/styles";
import { CommentListProps } from "./types";
import UserMessage from "./UserMessage/UserMessage";

//pasar componente como prop image
const CommentList = ({ comments }: CommentListProps) => {
    return (
        <FlexFlow direction="column" margin="0 30px 0 0">
            <Label>Comentarios</Label>
            <List>
                {comments.map(({ id, content, datetime, collaborator }) => (
                    <UserMessage
                        key={id}
                        content={content}
                        datetime={datetime}
                        id={id}
                        name={collaborator.name}
                        surname={collaborator.surname}
                        urlPhoto={collaborator.urlPhoto}
                    />
                ))}
            </List>
        </FlexFlow>
    );
};

export default CommentList;
