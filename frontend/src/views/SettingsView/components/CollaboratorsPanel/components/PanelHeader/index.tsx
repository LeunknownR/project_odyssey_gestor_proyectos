import { useState, ChangeEvent } from "react";
import InputFinder from "src/components/InputFinder";
import { AddNewCollaboratorBtn } from "./styles";
import { FlexFlow } from "src/components/styles";
import useSettingsViewContext from "src/views/SettingsView/utils/context/useSettingsViewContext";

const PanelHeader = () => {
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();
    const { collaboratorsHandler, searchCollaboratorHandler, showForm, setCurrentCollaborator } = useSettingsViewContext();
    const searchCollaborator = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        searchCollaboratorHandler.change("searchedCollaborator", value);
        clearTimeout(timeoutId);
        const newTimeoutId = setTimeout(() => {
            collaboratorsHandler.doFill();
        }, 500);
        setTimeoutId(newTimeoutId);
    };
    const clearSearchedCollaborator = (): void => {
        searchCollaboratorHandler.change("searchedCollaborator", "");
        collaboratorsHandler.doFill();
    };
    return (
        <FlexFlow width="100%">
            <InputFinder
                searchInput={searchCollaborator}
                searchedInput={
                    searchCollaboratorHandler.value.searchedCollaborator
                }
                clearSearchedInput={clearSearchedCollaborator}
            />
            <AddNewCollaboratorBtn
                onClick={() => {
                    setCurrentCollaborator(null);
                    showForm();
                }}
                icon="ic:baseline-plus"
            />
        </FlexFlow>
    );
};

export default PanelHeader;
