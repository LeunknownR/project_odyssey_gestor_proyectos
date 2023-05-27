import { ModalProps } from "src/components/Modal/types";
import { Project } from "src/entities/project/types"

export type AllProjectProps = {
    allProjects: Project[];
    setCurrentProject: (project: Project | null) => void;
    openUpdateProjectModal: () => void,
    openDeleteProjectModal: () => void,
}