import TitleHeader from "../TitleHeader/TitleHeader";
import AllProjectCard from "./components/AllProjectCard/AllProjectCard";
import { Container, ProjectList } from "./styles";
import { AllProjectProps } from "./types";

const AllProjects = ({
    allProjects,
    setCurrentProject,
    updateProjectModal,
    deleteProjectModal
}: AllProjectProps) => {
    return (
        <Container>
            <TitleHeader text="Todos los proyectos" />
            <ProjectList>
                {allProjects.map((project, idx) => {
                    //GNOMO DEBERÍA USAR SU PROJECT.ID PERO ESTÁ ROTO ESA MIERDA
                    return (
                        <AllProjectCard
                            key={idx}
                            project={project}
                            setCurrentProject={setCurrentProject}
                            updateProjectModal={updateProjectModal}
                            deleteProjectModal={deleteProjectModal}
                        />
                    );
                })}
            </ProjectList>
        </Container>
    );
};

export default AllProjects;
