import TitleHeader from "../TitleHeader/TitleHeader";
import RecentProjectCard from "./components/RecentProjectCard/RecentProjectCard";
import { CardList, Container } from "./styles";
import { RecentProjectsProps } from "./types";
const RecentProjects = ({
    recentProjects,
    setCurrentProject,
    updateProjectModal,
    deleteProjectModal
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
                            updateProjectModal={updateProjectModal}
                            deleteProjectModal={deleteProjectModal}
                        />
                    );
                })}
            </CardList>
        </Container>
    );
};

export default RecentProjects;
