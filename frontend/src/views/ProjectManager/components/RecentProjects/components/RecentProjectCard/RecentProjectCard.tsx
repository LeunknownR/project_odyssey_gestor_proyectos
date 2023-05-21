import { Icon } from "@iconify/react/dist/iconify.js";
import MenuOptions from "src/views/components/MenuOptions/MenuOptions";
import {
    Container,
    Image,
    OptionsWrapper,
    ProjectTitle,
    StateProject,
    TextRecentCard,
} from "./styles";
import ProjectUsers from "./components/ProjectUsers/ProjectUsers";
import { RecentProjectCardProps } from "./types";

const RecentProjectCard = ({ project }: RecentProjectCardProps) => {
    const {name, state, } = project
    return (
        <Container>
            <OptionsWrapper>
                <MenuOptions />
            </OptionsWrapper>
            <Image>
                <Icon icon="ph:projector-screen-chart-fill" />
            </Image>
            <TextRecentCard>
                <StateProject className={state}></StateProject>
                <ProjectTitle title={name}>
                    {name}
                </ProjectTitle>
                <ProjectUsers />
            </TextRecentCard>
        </Container>
    );
};

export default RecentProjectCard;
