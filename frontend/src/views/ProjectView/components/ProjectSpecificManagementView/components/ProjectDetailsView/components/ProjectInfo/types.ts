import { ProjectDetails } from "src/entities/project/entities";

export type ProjectInfoProps = {
    projectDetails: ProjectDetails;
    openUpdateDateModal: () => void;
    currentUserIsProjectLeader: boolean;
}