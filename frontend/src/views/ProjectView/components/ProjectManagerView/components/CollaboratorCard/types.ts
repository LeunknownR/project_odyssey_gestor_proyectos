import { CollaboratorUser } from "src/entities/collaborator/entities";

export type CollaboratorCardProps = {
    collaboratorUser: CollaboratorUser;
    variant: string;
    clear: () => void;
}