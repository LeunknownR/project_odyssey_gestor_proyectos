import TitleHeader from "../TitleHeader/TitleHeader";
import RecentProjectCard from "./components/RecentProjectCard/RecentProjectCard";
import { CardList, Container } from "./styles";
import { RecentProjectsProps } from "./types";

const RecentProjects = ({
    recentProjects,
    setCurrentProject,
    openUpdateProjectModal,
    openDeleteProjectModal,
}: RecentProjectsProps) => {
    return (
        <Container>
            <TitleHeader text="Proyectos recientes" />
            <CardList>
                {recentProjects.map(project => {
                    return (
                        <RecentProjectCard
                            key={project.id}
                            project={project}
                            setCurrentProject={setCurrentProject}
                            openUpdateProjectModal={openUpdateProjectModal}
                            openDeleteProjectModal={openDeleteProjectModal}
                        />
                    );
                })}
            </CardList>
        </Container>
    );
};

export default RecentProjects;
