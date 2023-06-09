import { FlexFlow } from "src/components/styles";
import { List } from "./styles";
import { Label } from "../TaskForm/styles";
import Comment from "./Comment/Comment";
import { CommentListProps } from "./types";

const CommentList = ({ comments }: CommentListProps) => {
    return (
        <FlexFlow direction="column" margin="0 30px 0 0">
            <Label>Comentarios</Label>
            <List>
                {comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </List>
        </FlexFlow>
    );
};

export default CommentList;
