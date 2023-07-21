/* eslint-disable no-constant-condition */
import { useState } from "react";
//#region Styles
import { CollaboratorFormWrapper, Container } from "./styles";
//#endregion
//#region Components
import CollaboratorForm from "./components/CollaboratorForm";
import CollaboratorsPanel from "./components/CollaboratorsPanel";
import UnselectedCollaborator from "./components/UnselectedCollaborator";
import usePreloader from "src/components/Preloader/utils/hooks/usePreloader";
import { User } from "src/entities/user/types";
//#endregion

const SettingsView = () => {
    const preloader = usePreloader();
    //#region States
    const [isMobileCollaboratorOpen, setMobileIsCollaboratorOpen] = useState(true);
    const [currentCollaborator, setCurrentCollaborator] = useState<User | null>(null);
    //#endregion
    return (
        <Container>
            <CollaboratorsPanel />
            <CollaboratorFormWrapper className={isMobileCollaboratorOpen ? "open" : ""}>
                {true ? <CollaboratorForm /> : <UnselectedCollaborator />}
            </CollaboratorFormWrapper>
        </Container>
    );
};

export default SettingsView;
