import { Icon } from "@iconify/react/dist/iconify.js";
import {
    Container,
    Image,
    ProjectTitle,
    StateProject,
    TextRecentCard,
} from "./styles";
import ProjectCollaborators from "./components/ProjectCollaborators/ProjectCollaborators";
import { RecentProjectCardProps } from "./types";
import Header from "./components/Header/Header";

const RecentProjectCard = ({
    project,
    options
}: RecentProjectCardProps) => {
    const { name, state, leader, projectMemberCount } = project;
    return (
        <Container>
            <Header
                project={project}
                options={options}
            />
            <Image>
                <Icon icon="ph:projector-screen-chart-fill" />
            </Image>
            <TextRecentCard>
                <div>
                    <StateProject className={state}></StateProject>
                    <ProjectTitle title={name}>{name}</ProjectTitle>
                </div>
                {leader && (
                    <ProjectCollaborators
                        leaderName={leader.name}
                        projectMemberCount={projectMemberCount}
                    />
                )}
            </TextRecentCard>
        </Container>
    );
};

export default RecentProjectCard;
