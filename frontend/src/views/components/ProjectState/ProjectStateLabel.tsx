import { Ball, Container, State } from "./styles";
import { ProjectStateProps } from "./types";
import { PROJECT_STATE } from "./utils/constants";

const ProjectStateLabel = ({ state }: ProjectStateProps) => {
    return (
        <Container color={PROJECT_STATE[state].background}>
            <Ball color={PROJECT_STATE[state].color} />
            <State color={PROJECT_STATE[state].color}>{PROJECT_STATE[state].title}</State>
        </Container>
    );
};

export default ProjectStateLabel;
