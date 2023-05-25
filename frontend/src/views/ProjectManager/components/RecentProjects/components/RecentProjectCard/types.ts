import { ModalProps } from "src/components/Modal/types";
import { Project } from "src/entities/project/types"

export type RecentProjectCardProps = {
    project: Project;
    setCurrentProject: (project: Project | null) => void;
    updateProjectModal: ModalProps;
    deleteProjectModal: ModalProps;
}