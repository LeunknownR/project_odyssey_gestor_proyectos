import { ModalProps } from "src/components/Modal/types";
import { AbsolutePaths } from "src/config/absolutePaths";
import { DBRoles } from "src/config/roles";
import useMainMenuButtons from "src/views/components/MainMenu/utils/hooks/useMainMenuButtons";
import { InitMainMenuButtonHandler } from "./types";

const useInitMainMenuButtons = (
    profileConfigModal: ModalProps
): InitMainMenuButtonHandler => {
    const menuButtonsHandler = useMainMenuButtons();
    const addGeneralAdminButtons = (): void => {
        menuButtonsHandler.addButton({
            id: "COLLABORATOR_MANAGEMENT",
            icon: "uiw:setting",
            to: AbsolutePaths.CollaboratorManagement,
        }, 2);
    };
    const addCollaboratorButtons = (): void => {
        menuButtonsHandler.addButton({
            id: "COLLABORATOR_PROFILE",
            icon: "uiw:setting",
            onClick: () => profileConfigModal.open(true),
        }, 2);
    };
    const addMenuButtons = (role: DBRoles): void => {
        switch (role) {
            case DBRoles.GeneralAdmin:
                addGeneralAdminButtons();
                return;
            case DBRoles.Collaborator:
                addCollaboratorButtons();
                return;
        }
    }
    return {
        menuButtonsHandler,
        addMenuButtons
    };
}

export default useInitMainMenuButtons;