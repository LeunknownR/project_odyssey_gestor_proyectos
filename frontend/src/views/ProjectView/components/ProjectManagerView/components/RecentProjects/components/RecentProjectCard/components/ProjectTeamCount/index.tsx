import { Container, UserBall } from "./styles";
import { ProjectTeamCountProps } from "./types";

const ProjectTeamCount = ({ 
    leaderName, projectMemberCount 
}: ProjectTeamCountProps) => {
    return (
        <Container>
            <UserBall>{leaderName[0]}</UserBall>
            {projectMemberCount !== 0 && <UserBall>+{projectMemberCount}</UserBall>}
        </Container>
    );
};

export default ProjectTeamCount;
