import MemberDetails from "./components/MemberDetails/MemberDetails";
import { Container } from "./styles";
import { MemberListProps } from "./types";

const MemberList = ({ collaborators, openDeleteModal }: MemberListProps) => {
    return (
        <Container>
            {collaborators.map(collaborator => (
                <MemberDetails
                    key={collaborator.id}
                    collaborator={collaborator}
                    openDeleteModal={() => openDeleteModal(collaborator)}
                />
            ))}
        </Container>
    );
};

export default MemberList;
