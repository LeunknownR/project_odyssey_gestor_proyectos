import { useState, useEffect, useRef } from "react";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import { LeaderSelectorProps } from "./types";
import { Container, Label, Wrapper } from "./styles";
import { CollaboratorUser } from "src/entities/collaborator/entities";
import useCustomInputSearch from "src/components/CustomInputSearch/utils/hooks/useCustomInputSearch";
import { requestSearchCollaboratorForGeneralAdmin } from "src/services/collaborators/relatedToCollaborators";
import CustomInputSearchUserOption from "src/views/components/CustomInputSearchUserOption/CustomInputSearchUserOption";
import { TEXT_FIELD_PROPS } from "src/views/ProjectView/components/ProjectManagerView/utils/constants";
import CollaboratorCard from "../../../../../CollaboratorCard/CollaboratorCard";
import useSearchCollaborator from "src/views/ProjectView/components/ProjectManagerView/utils/hooks/useSearchCollaborator";

const LeaderSelector = ({
    preloader,
    currentLeader, form,
    modalProps, variant,
}: LeaderSelectorProps) => {
    const $wrapper = useRef<HTMLDivElement>();
    const [selectedCollaborator, setSelectedCollaborator] = useState<CollaboratorUser | null>(null);
    useEffect(() => {
        if (!currentLeader || !modalProps.isOpen) return; 
        setSelectedCollaborator(currentLeader);
    }, [modalProps.isOpen]);
    const selectProjectLeaderHandler = useSearchCollaborator({
        requestSearchCollaborators: async (collaboratorName: string) => {
            preloader.show("Buscando colaboradores...")
            const { data } = await requestSearchCollaboratorForGeneralAdmin(collaboratorName);
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
                        handler={customSearchInputHandler}
                        clearOptions={selectProjectLeaderHandler.clear}
                        fillOptions={selectProjectLeaderHandler.fill}
                        options={selectProjectLeaderHandler.collaboratorUserList}
                        getSearchedItemToShow={options => ({ 
                            value: options.id,
                            content: (
                                <CustomInputSearchUserOption {...options}/>
                            )
                        })}
                        variant={`${variant}-search`}
                        maxLength={100}
                    />
                </Wrapper>
            )}
        </Container>
    );
};

export default LeaderSelector;
