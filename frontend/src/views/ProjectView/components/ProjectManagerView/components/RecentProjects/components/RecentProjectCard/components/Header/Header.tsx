import MenuOptions from "src/views/components/MenuOptions/MenuOptions";
import { DeadlineWrapper, OptionsWrapper } from "./styles";
import { HeaderProps } from "./types";
import ProjectDeadline from "../../../../../AllProjects/components/AllProjectCard/components/ProjectDeadline/ProjectDeadline";

const Header = ({
    project,
    options
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
        <OptionsWrapper>
            <MenuOptions 
                menuPosition="left" 
                options={options}/>
        </OptionsWrapper>
        </>
    );
};

export default Header;
