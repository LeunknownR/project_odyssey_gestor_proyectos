import { createContext } from "react";
import { SettingsViewContextType } from "./types";
import { INITIAL_COLLABORATOR_FILTERS } from "../constants";

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
