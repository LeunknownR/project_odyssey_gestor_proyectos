import useModal from "src/components/Modal/utils/hooks/useModal";
// import SavedChangesModal from "../ProjectManager/components/SavedChangesModal/SavedChangesModal";
// import EliminationChangesModal from "../ProjectManager/components/EliminationModal/EliminationModal";
// import AddMembersChangesModal from "../ProjectManager/components/AddMemberModal/AddMemberModal";
import { Container } from "./styles";
// import ActualizationChangesModal from "../ProjectManager/components/ActualizationModal/ActualizationModal";


const Alexis = () => {
    // const savedChangesModal = useModal(true);
    // const eliminationChangesModal = useModal(true);
    // const addMemberChangesModal = useModal(true);
    // const actualizationChangesModal = useModal(true);
    return (
        <Container>
            <h1>Ruta de Alexis</h1>
            <h2>ADDWAWDAWwd</h2>
            <img src="https://pbs.twimg.com/media/FjoT0tbXwAoT_ih.jpg" />
            {/* <SavedChangesModal modalProps={savedChangesModal}/> */}
            {/* <EliminationChangesModal modalProps={eliminationChangesModal}/> */}
            {/* <AddMembersChangesModal modalProps={addMemberChangesModal}/> */}
            {/* <ActualizationChangesModal modalProps={actualizationChangesModal}/> */}
        </Container>
    );
};

export default Alexis;
