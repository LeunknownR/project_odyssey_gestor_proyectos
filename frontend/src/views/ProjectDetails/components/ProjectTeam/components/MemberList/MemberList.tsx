import MemberDetails from "./components/MemberDetails/MemberDetails";
import { Container } from "./styles";
import { MemberListProps } from "./types";

const MemberList = ({ collaborators }: MemberListProps) => {
    return (
        <Container>
            {collaborators.map((collaborator, idx) => (
                <MemberDetails key={collaborator.id} {...collaborator} />
            ))}
        </Container>
    );
};

export default MemberList;
