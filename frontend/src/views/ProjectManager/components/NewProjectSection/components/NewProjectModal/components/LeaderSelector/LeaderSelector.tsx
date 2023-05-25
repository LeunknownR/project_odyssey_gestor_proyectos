import { useState, useEffect, useRef } from "react";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import { TEXT_FIELD_PROPS } from "src/views/ProjectManager/utils/constants";
import { LeaderSelectorProps } from "./types";
import useSearchCollaborator from "src/views/ProjectManager/utils/hooks/useSearchCollaborator";
import { Container, Label, Wrapper } from "./styles";
import { CollaboratorUser } from "src/entities/collaborator/types";
import CollaboratorCard from "src/views/ProjectManager/components/CollaboratorCard/CollaboratorCard";
import useCustomInputSearch from "src/components/CustomInputSearch/utils/hooks/useCustomInputSearch";
import { requestSearchCollaboratorForGeneralAdmin } from "src/services/collaborators/relatedToCollaborators";

const LeaderSelector = ({
    form,
    modalProps,
    variant,
    preloader
    // selectedLeader,
}: LeaderSelectorProps) => {
    const $wrapper = useRef<HTMLDivElement>();
    const [selectedCollaborator, setSelectedCollaborator] =
        useState<CollaboratorUser | null>(null);
    const selectProjectLeaderHandler = useSearchCollaborator({
        requestSearchCollaborators: async (value: string) => {
            preloader.show("Buscando colaboradores...")
            const { data } = await requestSearchCollaboratorForGeneralAdmin(value);
            preloader.hide();
            return data;
        },
    });
    const customSearchInputHandler = useCustomInputSearch<CollaboratorUser>({
        clearOptions: selectProjectLeaderHandler.clear,
        fillOptions: selectProjectLeaderHandler.fill,
        onChange: setSelectedCollaborator,
    });
    useEffect(() => {
        if (modalProps.isOpen) return;
        customSearchInputHandler.clear();
    }, [modalProps.isOpen]);
    useEffect(() => {
        form.change(
            TEXT_FIELD_PROPS.PROJECT_LEADER.name,
            selectedCollaborator?.id || 0
        );
    }, [selectedCollaborator]);
    const eraseSelectedLeader = () => {
        setSelectedCollaborator(null)
        customSearchInputHandler.clear();
    }
    return (
        <Container>
            <Label className={variant}>Líder del proyecto</Label>
            {selectedCollaborator ? (
                <CollaboratorCard
                    collaboratorUser={selectedCollaborator}
                    clear={eraseSelectedLeader}
                    variant={variant}
                />
            ) : (
                <Wrapper ref={$wrapper}>
                    <CustomInputSearch<CollaboratorUser>
                        {...TEXT_FIELD_PROPS.PROJECT_LEADER}
                        options={
                            selectProjectLeaderHandler.collaboratorUserList
                        }
                        getSearchedItemToShow={option => ({
                            value: option.id,
                            text: selectProjectLeaderHandler.getText(option),
                            urlPhoto: option.urlPhoto,
                        })}
                        onChange={customSearchInputHandler.changeSearchText}
                        selectOption={customSearchInputHandler.selectOption}
                        value={customSearchInputHandler.searchText}
                        variant={`${variant}-search`}
                        maxLength={100}
                    />
                </Wrapper>
            )}
        </Container>
    );
};

export default LeaderSelector;
