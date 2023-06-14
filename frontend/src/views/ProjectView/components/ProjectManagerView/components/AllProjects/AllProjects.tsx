import TitleHeader from "src/views/components/TitleHeader/TitleHeader";
import AllProjectCard from "./components/AllProjectCard/AllProjectCard";
import { Container, ProjectList } from "./styles";
import { AllProjectProps } from "./types";

const AllProjects = ({
    allProjects,
    getMenuOptions
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
                            options={getMenuOptions(project)}
                        />
                    );
                })}
            </ProjectList>
        </Container>
    );
};

export default AllProjects;
