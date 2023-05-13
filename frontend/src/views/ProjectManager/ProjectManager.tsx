import Header from "src/views/components/Header/Header";
import { Container } from "./styles";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";

const ProjectManager = () => {
    return (
        <Container>
            <Header />
            <SidebarMenu />
        </Container>
    );
};

export default ProjectManager;
