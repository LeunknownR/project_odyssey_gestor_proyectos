import { createContext } from "react";
import { SettingsViewContextType } from "./types";
import { INITIAL_COLLABORATOR_FILTERS } from "../constants";
import { DEFAULT_NOTIFICATION_CARD } from "src/components/NotificationCard/utils/constants";

const INIT_SETTINGS_VIEW_CONTEXT: SettingsViewContextType = {
    preloader: {
        hide: () => {},
        show: () => {},
        value: {
            hidden: true,
            message: ""
        }
    },
    currentCollaborator: null,
    setCurrentCollaborator: () => {},
    notificationCard: {
        visible: false,
        timeoutToClose: 0,
        hide: () => {},
        show: () => {},
        cardAppearanceProps: DEFAULT_NOTIFICATION_CARD,
        changeAppearance: () => {},
    },
    collaboratorsHandler: {
        value: [],
        fill: async () => {},
        doFill: () => {},
    },
    searchCollaboratorHandler: {
        value: {...INITIAL_COLLABORATOR_FILTERS},
        change: () => {},
    },
    showForm: () => {},
    hideForm: () => {},
};
const SettingsViewContext = createContext(INIT_SETTINGS_VIEW_CONTEXT);

export default SettingsViewContext;
