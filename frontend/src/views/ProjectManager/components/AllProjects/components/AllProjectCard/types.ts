import { Project } from "src/entities/project/types"

export type AllProjectCardProps = {
    project: Project;
    setCurrentProject: (project: Project | null) => void;
    openUpdateProjectModal: () => void;
    openDeleteProjectModal: () => void;
}