import { CollaboratorUser } from "src/entities/collaborator/entities";

export type CommentListProps = {
    comments: CommentTypes[];
};

export type CommentTypes = {
    id: number;
    content: string;
    datetime: number;
    collaborator: Omit<CollaboratorUser, "email">;
};
