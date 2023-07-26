import { useContext } from "react";
import SettingsViewContext from "./SettingsViewContext";

const useSettingsViewContext = () => {
    return useContext(SettingsViewContext);
};

export default useSettingsViewContext;
