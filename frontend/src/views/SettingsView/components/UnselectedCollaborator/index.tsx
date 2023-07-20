import NoContent from "src/views/components/NoContent/NoContent";
import NoProjectsImage from "src/images/no-projects.png";
import { Container } from "./styles";
import { UNSELECTED_COLLABORATOR_PROPS } from "./utils/constants";

const UnselectedCollaborator = () => {
    return (
        <Container>
            <NoContent img={NoProjectsImage} {...UNSELECTED_COLLABORATOR_PROPS} />
        </Container>
    );
};

export default UnselectedCollaborator;
