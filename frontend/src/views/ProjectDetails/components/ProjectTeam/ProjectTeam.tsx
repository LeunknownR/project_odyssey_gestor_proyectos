import { Column } from "src/components/styles";
import ProjectTeamList from "./components/MemberList/ProjectTeamList";
import Header from "./components/Header/Header";
import { ProjectTeamProps } from "./types";

const ProjectTeam = ({
    collaborators,
    openAddMemberModal,
    openDeleteModal,
    currentUserIsProjectLeader,
}: ProjectTeamProps) => {
    return (
        <Column margin="15px 0 0" gap="40px">
            <Header
                openAddMemberModal={openAddMemberModal}
                currentUserIsProjectLeader={currentUserIsProjectLeader}
            />
            <ProjectTeamList
                collaborators={collaborators}
                openDeleteModal={openDeleteModal}
                currentUserIsProjectLeader={currentUserIsProjectLeader}
            />
        </Column>
    );
};

export default ProjectTeam;
