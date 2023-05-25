import {useState} from "react"
import TitleHeader from "src/views/ProjectManager/components/TitleHeader/TitleHeader";
import { Container, Content } from "./styles";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo";
import ProjectTeam from "./components/ProjectTeam/ProjectTeam";
import Footer from "./components/Footer/Footer";
import { ProjectDetails } from "src/entities/project/types";

const ProjectDetailsView = () => {
    const [projectDetails, setProjectDetails] = useState<ProjectDetails[]>([]);
    // const fillProjectDetails = async () => {
    //     // preloader.show(null);
    //     const { data } = await requestGetProjectDetails();
    //     // preloader.hide();
    //     if (data === null) return;
    //     setProjectDetails(data);
    // }
    return (
        <Container>
            <Content>
                <TitleHeader text="DETALLE DEL PROYECTO" />
                <ProjectInfo />
                <ProjectTeam />
                <Footer />
            </Content>
        </Container>
    );
};

export default ProjectDetailsView;
