/* eslint-disable no-constant-condition */
import { useState, useEffect } from "react";
//#region Styles
import { CollaboratorFormWrapper, Container } from "./styles";
//#endregion
//#region Components
import CollaboratorForm from "./components/CollaboratorForm";
import CollaboratorsPanel from "./components/CollaboratorsPanel";
import UnselectedCollaborator from "./components/UnselectedCollaborator";
import usePreloader from "src/components/Preloader/utils/hooks/usePreloader";
import { User } from "src/entities/user/types";
import usePaginator from "src/components/Paginator/utils/hooks/usePaginator";
import useCollaboratorFilters from "./hooks/useCollaboratorFilters";
import useCollaborators from "./hooks/useCollaborators";
//#endregion

const SettingsView = () => {
    //#region States
    const [isMobileCollaboratorOpen, setMobileIsCollaboratorOpen] =
        useState(true);
    const [currentCollaborator, setCurrentCollaborator] = useState<User | null>(
        null
    );
    //#endregion
    const preloader = usePreloader();
    const paginator = usePaginator();
    const filters = useCollaboratorFilters();
    const collaborators = useCollaborators(preloader, filters.value, paginator);
    useEffect(() => {
        if (!currentCollaborator) return;
        // Actualizando formulario luego de una actualización de colaborador
        setCurrentCollaborator(
            collaborators.value.find(
                ({ username }) => username === currentCollaborator.username
            ) || null
        );
    }, [collaborators.value]);
    return (
        <Container>
            <CollaboratorsPanel
                collaborators={collaborators.value}
                paginator={paginator}
                doTriggerFillingRequest={collaborators.doFill}
            />
            <CollaboratorFormWrapper
                className={isMobileCollaboratorOpen ? "open" : ""}
            >
                {true ? (
                    <CollaboratorForm
                        currentCollaborator={currentCollaborator}
                    />
                ) : (
                    <UnselectedCollaborator />
                )}
            </CollaboratorFormWrapper>
        </Container>
    );
};

export default SettingsView;
