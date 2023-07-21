import MenuOptions from "src/views/components/MenuOptions/MenuOptions";
import { DeadlineWrapper, OptionsWrapper } from "./styles";
import ProjectDeadline from "src/views/ProjectManager/components/AllProjects/components/AllProjectCard/components/ProjectDeadline/ProjectDeadline";
import { HeaderProps } from "./types";
import { AbsolutePaths } from "src/config/absolutePaths";
import { setProjectId } from "src/storage/project.session";
import { useNavigate } from "react-router-dom";

const Header = ({
    project,
    setCurrentProject,
    openUpdateProjectModal,
    openDeleteProjectModal,
}: HeaderProps) => {
    const { startDate, endDate } = project;
    const navigate = useNavigate();
    const moveToProjectDetails = (): void => {
        navigate(AbsolutePaths.ProjectDetails);
        setProjectId(project.id);
    };
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
                onClickDetails={moveToProjectDetails}
            />
        </OptionsWrapper>
        </>
    );
};

export default Header;
