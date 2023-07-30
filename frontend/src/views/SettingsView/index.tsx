import { useState, useEffect } from "react";
//#region Styles
import { CollaboratorFormWrapper, Container } from "./styles";
//#endregion
//#region Components
import CollaboratorForm from "./components/CollaboratorForm";
import CollaboratorsPanel from "./components/CollaboratorsPanel";
import UnselectedCollaborator from "./components/UnselectedCollaborator";
import Preloader from "src/components/Preloader/Preloader";
import NotificationCard from "src/components/NotificationCard/NotificationCard";
//#endregion
//#region Types
import { User } from "src/entities/user/types";
//#endregion
//#region Utils
import usePreloader from "src/components/Preloader/utils/hooks/usePreloader";
import usePaginator from "src/components/Paginator/utils/hooks/usePaginator";
import useCollaboratorFilters from "./utils/hooks/useCollaboratorFilters";
import useCollaborators from "./utils/hooks/useCollaborators";
import SettingsViewContext from "./utils/context/SettingsViewContext";
import useNotificationCard from "src/components/NotificationCard/utils/hooks/useNotificationCard";
//#endregion


const SettingsView = () => {
    //#region States
    const [isMobileCollaboratorOpen, setMobileIsCollaboratorOpen] =
        useState(true);
    const [currentCollaborator, setCurrentCollaborator] = useState<User | null>(
        null
    );
    const [formIsVisible, setFormIsVisible] = useState<boolean>(false);
    //#endregion
    const preloader = usePreloader();
    const paginator = usePaginator();
    const notificationCard = useNotificationCard();
    const filters = useCollaboratorFilters(paginator.clear);
    const collaborators = useCollaborators(preloader, filters.value, paginator);
    useEffect(() => {
        setMobileIsCollaboratorOpen(formIsVisible);
    }, [formIsVisible]);
    useEffect(() => {
        if (!currentCollaborator) return;
        // Actualizando formulario luego de una actualización de colaborador
        setCurrentCollaborator(
            collaborators.value.find(
                ({ username }) => username === currentCollaborator.username
            ) || null
        );
    }, [collaborators.value]);
    const showForm = () => {
        setFormIsVisible(true);
    };
    const hideForm = () => {
        setFormIsVisible(false);
    };
    return (
        <Container>
            <SettingsViewContext.Provider
                value={{
                    preloader,
                    currentCollaborator,
                    setCurrentCollaborator,
                    collaboratorsHandler: collaborators,
                    searchCollaboratorHandler: filters,
                    notificationCard,
                    showForm,
                    hideForm,
                }}
            >
                <CollaboratorsPanel
                    paginator={paginator}
                    doTriggerFillingRequest={collaborators.doFill}
                />
                <CollaboratorFormWrapper
                    className={isMobileCollaboratorOpen ? "open" : ""}
                >
                    {formIsVisible ? (
                        <CollaboratorForm />
                    ) : (
                        <UnselectedCollaborator />
                    )}
                </CollaboratorFormWrapper>
            </SettingsViewContext.Provider>
            <NotificationCard
                handler={notificationCard}
                appearanceProps={notificationCard.cardAppearanceProps}
            />
            <Preloader {...preloader.value} />
        </Container>
    );
};

export default SettingsView;
