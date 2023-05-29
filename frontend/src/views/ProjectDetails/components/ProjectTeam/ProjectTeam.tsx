import { Column } from "src/components/styles";
import ProjectTeamList from "./components/MemberList/ProjectTeamList";
import Header from "./components/Header/Header";
import { ProjectTeamProps } from "./types";

const ProjectTeam = ({
    collaborators,
    openAddMemberModal,
    openDeleteModal,
}: ProjectTeamProps) => {
    return (
        <Column margin="15px 0 0" gap="20px">
            <Header openAddMemberModal={openAddMemberModal} />
            <ProjectTeamList
                collaborators={collaborators}
                openDeleteModal={openDeleteModal}
            />
        </Column>
    );
};

export default ProjectTeam;
