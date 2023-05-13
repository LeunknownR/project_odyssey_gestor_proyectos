import useModal from "src/components/Modal/utils/hooks/useModal";
//import SavedChangesModal from "../ProjectManager/components/SavedChangesModal/SavedChangesModal";
import EliminationChangesModal from "../ProjectManager/components/EliminationModal/EliminationModal";
import { Container } from "./styles";


/*
const Alexis = () => {
    const savedChangesModal = useModal(true);
    return (
        <Container>
            <h1>Ruta de Alexis</h1>
            <img src="https://pbs.twimg.com/media/FjoT0tbXwAoT_ih.jpg" />
            <SavedChangesModal modalProps={savedChangesModal}/>
        </Container>
    );
};
*/
const Alexis1 = () => {
    const eliminationChangesModal = useModal(true);
    return (
        <Container>
            <h1>Ruta de Alexis</h1>
            <img src="https://pbs.twimg.com/media/FjoT0tbXwAoT_ih.jpg" />
            <EliminationChangesModal modalProps={eliminationChangesModal}/>
        </Container>
    )
};

export default Alexis1;
