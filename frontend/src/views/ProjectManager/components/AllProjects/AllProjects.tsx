import TitleHeader from "../TitleHeader/TitleHeader";
import AllProjectCard from "./components/AllProjectCard/AllProjectCard";
import { Container, ProjectList } from "./styles";
import { AllProjectProps } from "./types";

const AllProjects = ({
    allProjects,
    setCurrentProject,
    openUpdateProjectModal,
    openDeleteProjectModal,
}: AllProjectProps) => {
    return (
        <Container>
            <TitleHeader text="Todos los proyectos" />
            <ProjectList>
                {allProjects.map(project => {
                    return (
                        <AllProjectCard
                            key={project.id}
                            project={project}
                            setCurrentProject={setCurrentProject}
                            openUpdateProjectModal={openUpdateProjectModal}
                            openDeleteProjectModal={openDeleteProjectModal}
                        />
                    );
                })}
            </ProjectList>
        </Container>
    );
};

export default AllProjects;
