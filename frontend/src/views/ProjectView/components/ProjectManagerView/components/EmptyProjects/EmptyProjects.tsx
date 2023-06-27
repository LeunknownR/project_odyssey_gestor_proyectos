import NoProjectsImage from "src/images/no-projects.png";
import NoContent from "src/views/components/NoContent/NoContent";
import { Container } from "./styles";
import { EMPTY_PROJECT_TEST } from "./utils/constants";
import useUserRole from "src/storage/hooks/useUserRole";

const EmptyProjects = () => {
    const userRole = useUserRole()
    return (
        <Container>
            {userRole && <NoContent
                img={NoProjectsImage}
                title={EMPTY_PROJECT_TEST[userRole].title}
                subtitle={EMPTY_PROJECT_TEST[userRole].subtitle}
                titleColor="var(--white-1)"
            />}
            
        </Container>
    );
};

export default EmptyProjects;
