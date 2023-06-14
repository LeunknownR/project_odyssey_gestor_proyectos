import { Container, UserBall } from "./styles";
import { ProjectCollaboratorsProps } from "./types";

const ProjectCollaborators = ({leaderName, projectMemberCount}: ProjectCollaboratorsProps) => {
    return (
        <Container>
            <UserBall>{leaderName[0]}</UserBall>
            {projectMemberCount !== 0 && <UserBall>+{projectMemberCount}</UserBall>}
        </Container>
    );
};

export default ProjectCollaborators;
