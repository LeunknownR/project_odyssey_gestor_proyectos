import TitleHeader from "src/views/ProjectManager/components/TitleHeader/TitleHeader";
import { Container } from "./styles";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo";
import ProjectTeam from "./components/ProjectTeam/ProjectTeam";
import Footer from "./components/Footer/Footer";

const ProjectDetails = () => {
    return (
        <Container>
            <TitleHeader text="DETALLE DEL PROYECTO" />
            <ProjectInfo />
            <ProjectTeam />
            <Footer/>
        </Container>
    );
};

export default ProjectDetails;
