import { Project } from "src/entities/project/types";

export type RecentProjectsProps = {
    recentProjects: Project[];
    setCurrentProject: (project: Project | null) => void;
    openUpdateProjectModal: () => void;
    openDeleteProjectModal: () => void;
};
