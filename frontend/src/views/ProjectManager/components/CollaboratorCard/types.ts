import { CollaboratorUser } from "src/entities/collaborator/types";

export type CollaboratorCardProps = {
    collaboratorUser: CollaboratorUser;
    variant: string;
    clear: () => void;
}