import { Container, UserBall } from "./styles";
import { ProjectCollaboratorsProps } from "./types";

const ProjectCollaborators = ({leaderName = "SXRX", projectMemberCount}: ProjectCollaboratorsProps) => {
    return (
        <Container>
            <UserBall>{leaderName[0]}</UserBall>
            {/*GNOMO PREGUNTAR SI ESTÁ BIEN QUITARLO O DEJARLO CON SU CERASO NOMÁS JEJEJE*/}
            {projectMemberCount !== 0 && <UserBall>+{projectMemberCount}</UserBall>}
        </Container>
    );
};

export default ProjectCollaborators;
