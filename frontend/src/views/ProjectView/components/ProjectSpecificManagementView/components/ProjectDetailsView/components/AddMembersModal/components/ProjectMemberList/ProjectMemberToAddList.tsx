import NoProjectMembers from "../NoProjectMembers/NoProjectMembers";
import ProjectMemberListItem from "../ProjectMemberListItem/ProjectMemberListItem";
import { Container, List } from "./styles";
import { ProjectMemberToAddListProps } from "./types";

const ProjectMemberToAddList = ({
    projectMemberList,
    removeProjectMember
}: ProjectMemberToAddListProps) => {
    return (
        <Container>
            {projectMemberList.length === 0 
            ? <NoProjectMembers/>
            : <List>
                {projectMemberList.map(memberProject => (
                    <ProjectMemberListItem 
                        key={memberProject.id}
                        memberProject={memberProject} 
                        onRemove={() => removeProjectMember(memberProject.id)}/>
                ))}
            </List>}
        </Container>
    );
}

export default ProjectMemberToAddList;