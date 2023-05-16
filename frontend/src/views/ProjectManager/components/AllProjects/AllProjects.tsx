import TitleHeader from "../TitleHeader/TitleHeader";
import AllProjectCard from "./components/AllProjectCard/AllProjectCard";
import { Container, ProjectList } from "./styles";

const test = [1, 2, 3, 4];
const AllProjects = () => {
    return (
        <Container>
            <TitleHeader text="Todos los proyectos" />
            <ProjectList>
                {test.map((_, idx) => {
                    return <AllProjectCard key={idx} />;
                })}
            </ProjectList>
        </Container>
    );
};

export default AllProjects;
