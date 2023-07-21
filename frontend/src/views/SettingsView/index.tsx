/* eslint-disable no-constant-condition */
//#region Styles
import { CollaboratorFormWrapper, Container } from "./styles";
//#endregion
//#region Components
import CollaboratorForm from "./components/CollaboratorForm";
import CollaboratorsPanel from "./components/CollaboratorsPanel";
import UnselectedCollaborator from "./components/UnselectedCollaborator";
//#endregion

const SettingsView = () => {
    return (
        <Container>
            <CollaboratorsPanel />
            <CollaboratorFormWrapper>
                {true ? <CollaboratorForm /> : <UnselectedCollaborator />}
            </CollaboratorFormWrapper>
        </Container>
    );
};

export default SettingsView;