import { ProjectTaskCollaboratorUser } from "src/entities/projectTasks/entities";

export type CommentListProps = {
    comments: CommentTypes[];
};

export type CommentTypes = {
    id: number;
    content: string;
    datetime: number;
    collaborator: ProjectTaskCollaboratorUser;
};
