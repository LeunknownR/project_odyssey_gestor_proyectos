import MenuOptions from "src/views/components/MenuOptions/MenuOptions";
import { DeadlineWrapper, OptionsWrapper } from "./styles";
import ProjectDeadline from "src/views/ProjectManager/components/AllProjects/components/AllProjectCard/components/ProjectDeadline/ProjectDeadline";
import { HeaderProps } from "./types";
import { AbsolutePaths } from "src/config/absolutePaths";
import { useNavigate } from "react-router-dom";

const Header = ({
    project,
    setCurrentProject,
    openUpdateProjectModal,
    openDeleteProjectModal,
}: HeaderProps) => {
    const { startDate, endDate } = project;
    return (
        <>
        <DeadlineWrapper>
            <ProjectDeadline
                startDate={startDate}
                endDate={endDate}
                variant="short"
            />
        </DeadlineWrapper>
        <OptionsWrapper onClick={() => setCurrentProject(project)}>
            <MenuOptions
                onClickEdit={openUpdateProjectModal}
                onClickDelete={openDeleteProjectModal}
                onClickDetails={`${project.id}/detalles`}
            />
        </OptionsWrapper>
        </>
    );
};

export default Header;
