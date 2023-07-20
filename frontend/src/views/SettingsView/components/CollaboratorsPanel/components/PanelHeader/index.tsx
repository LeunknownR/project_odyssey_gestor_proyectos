import InputFinder from "src/components/InputFinder";
import { AddNewCollaboratorBtn } from "./styles";
import { FlexFlow } from "src/components/styles";

const PanelHeader = () => {
    return (
        <FlexFlow width="100%">
            <InputFinder
                searchInput={e => console.log("PINGA")}
                searchedInput=""
                clearSearchedInput={() => console.log("hola")}
            />
            <AddNewCollaboratorBtn
                onClick={() => console.log("pinga")}
                icon="ic:baseline-plus"
            />
        </FlexFlow>
    );
};

export default PanelHeader;
