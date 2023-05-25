import { useState, useEffect, useRef } from "react";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import { TEXT_FIELD_PROPS } from "src/views/ProjectManager/utils/constants";
import { LeaderSelectorProps } from "./types";
import useSelectCollaborator from "src/views/ProjectManager/utils/hooks/useCollaboratorUserList";
import { Container, Label, Wrapper } from "./styles";
import { CollaboratorUser } from "src/entities/collaborator/types";
import CollaboratorCard from "src/views/ProjectManager/components/CollaboratorCard/CollaboratorCard";
import useCustomInputSearch from "src/components/CustomInputSearch/utils/hooks/useCustomInputSearch";
import { requestSearchCollaboratorForGeneralAdmin } from "src/services/collaborators/relatedToCollaborators";

const LeaderSelector = ({ form, modalProps }: LeaderSelectorProps) => {
    const $wrapper = useRef<HTMLDivElement>();
    const [selectedCollaborator, setSelectedCollaborator] = useState<CollaboratorUser | null>(null);
    const selectProjectLeaderHandler = useSelectCollaborator({
        requestSearchCollaborators: async (value: string) => {
            const { data } = await requestSearchCollaboratorForGeneralAdmin(value);
            return data;
        }
    });
    const customSearchInputHandler = useCustomInputSearch<CollaboratorUser>({
        clearOptions: selectProjectLeaderHandler.clear,
        fillOptions: selectProjectLeaderHandler.fill,
        onChange: setSelectedCollaborator
    });
    useEffect(() => {
        if (modalProps.isOpen) 
            return;
        customSearchInputHandler.clear();
    }, [modalProps.isOpen]);
    useEffect(() => {
        form.change(TEXT_FIELD_PROPS.PROJECT_LEADER.name, selectedCollaborator?.id || 0);
    }, [selectedCollaborator]);
    return (
        <Container>
            <Label>Líder del proyecto</Label>
            {selectedCollaborator? (
                <CollaboratorCard
                    collaboratorUser={selectedCollaborator}
                    clear={() => setSelectedCollaborator(null)}
                    variant="primary"
                />
            ) : (
                <Wrapper ref={$wrapper}>
                    <CustomInputSearch<CollaboratorUser>
                        {...TEXT_FIELD_PROPS.PROJECT_LEADER}
                        options={selectProjectLeaderHandler.value}
                        getSearchedItemToShow={option => ({ 
                            value: option.id,
                            text: selectProjectLeaderHandler.getText(option),
                            urlPhoto: option.urlPhoto
                        })}
                        onChange={customSearchInputHandler.changeSearchText}
                        selectOption={customSearchInputHandler.selectOption}
                        value={customSearchInputHandler.searchText}
                        variant="primary-search"
                        maxLength={100}
                    />
                </Wrapper>
            )}
        </Container>
    );
};

export default LeaderSelector;
