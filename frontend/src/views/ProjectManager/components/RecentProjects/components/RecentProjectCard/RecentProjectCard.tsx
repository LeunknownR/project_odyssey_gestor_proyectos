import { Icon } from "@iconify/react/dist/iconify.js";
import MenuOptions from "src/views/components/MenuOptions/MenuOptions";
import {
    Container,
    Image,
    OptionsWrapper,
    ProjectTitle,
    StateProyectDisable,
    TextRecentCard,
} from "./styles";
import ProjectUsers from "./components/ProjectUsers/ProjectUsers";

const RecentProjectCard = () => {
    return (
        <Container>
            <OptionsWrapper>
                <MenuOptions />
            </OptionsWrapper>
            <Image>
                <Icon icon="ph:projector-screen-chart-fill" />
            </Image>
            <TextRecentCard>
                <StateProyectDisable></StateProyectDisable>
                {/*GNOMO🧚‍♀️*/}
                <ProjectTitle title="Project Odyssey - Gestor de Proyectos">
                    Project Odyssey - Gesasdasdasdasdasdasdasd
                </ProjectTitle>
                <ProjectUsers />
            </TextRecentCard>
        </Container>
    );
};

export default RecentProjectCard;
