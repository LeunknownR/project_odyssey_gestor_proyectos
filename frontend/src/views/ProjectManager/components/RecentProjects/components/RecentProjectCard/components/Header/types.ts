import { Project } from "src/entities/project/types";

export type HeaderProps = {
    project: Project;
    setCurrentProject: (project: Project | null) => void;
    openUpdateProjectModal: () => void;
    openDeleteProjectModal: () => void;
}