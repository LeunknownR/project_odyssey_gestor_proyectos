import { Project } from "src/entities/project/types"

export type RecentProjectCardProps = {
    project: Project;
    setCurrentProject: (project: Project | null) => void;
    openUpdateProjectModal: () => void;
    openDeleteProjectModal: () => void;
}