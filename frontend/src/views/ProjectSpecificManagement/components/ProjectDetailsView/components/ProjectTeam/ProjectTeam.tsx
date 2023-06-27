import ProjectTeamList from "./components/MemberList/ProjectTeamList";
import Header from "./components/Header/Header";
import { ProjectTeamProps } from "./types";
import { FlexFlow } from "src/components/styles";

const ProjectTeam = ({
    collaborators,
    openAddMemberModal,
    openDeleteModal,
    currentUserIsProjectLeader,
}: ProjectTeamProps) => {
    return (
        <FlexFlow direction="column" margin="15px 0 0" gap="40px">
            <Header
                openAddMemberModal={openAddMemberModal}
                currentUserIsProjectLeader={currentUserIsProjectLeader}
            />
            <ProjectTeamList
                collaborators={collaborators}
                openDeleteModal={openDeleteModal}
                currentUserIsProjectLeader={currentUserIsProjectLeader}
            />
        </FlexFlow>
    );
};

export default ProjectTeam;
