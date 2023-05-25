import MemberDetails from "./components/MemberDetails/MemberDetails";
import { Container } from "./styles";

const PROV = [1, 2, 3, 4, 5];
const MemberList = () => {
    return (
        <Container>
            {PROV.map((_, idx) => (
                <MemberDetails key={idx} />
            ))}
        </Container>
    );
};

export default MemberList;
