import { ProjectTaskCollaboratorUser } from "src/entities/projectTask/entities";

export type CommentListProps = {
    comments: CommentTypes[];
};

export type CommentTypes = {
    id: number;
    content: string;
    datetime: number;
    collaborator: ProjectTaskCollaboratorUser;
};
