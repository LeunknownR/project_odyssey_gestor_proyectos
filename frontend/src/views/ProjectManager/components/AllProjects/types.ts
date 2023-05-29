import { Project } from "src/entities/project/types"

export type AllProjectProps = {
    allProjects: Project[];
    recentProjects: Project[];
    setCurrentProject: (project: Project | null) => void;
    openUpdateProjectModal: () => void,
    openDeleteProjectModal: () => void,
}