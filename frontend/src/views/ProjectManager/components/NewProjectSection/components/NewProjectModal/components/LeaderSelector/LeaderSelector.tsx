import { useEffect, useRef, useState } from "react";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import { TEXT_FIELD_PROPS } from "src/views/ProjectManager/utils/constants";
import { LeaderSelectorProps } from "./types";
import useCollaboratorList from "src/views/ProjectManager/utils/hooks/useCollaboratorList";
import { Container, Label, Wrapper } from "./styles";
import { CollaboratorUser } from "src/entities/collaborator/types";
import CollaboratorCard from "src/views/ProjectManager/components/CollaboratorCard/CollaboratorCard";

const LeaderSelector = ({ form, modalProps }: LeaderSelectorProps) => {
    const [searchText, setSearchText] = useState();
    const [selectedLeader, setSelectedLeader] = useState<CollaboratorUser | null>(null);
    const $wrapper = useRef<HTMLDivElement>();
    const collaboratorListHandler = useCollaboratorList();
    const { leaderId } = form.value;
    useEffect(() => {
        if (modalProps.isOpen) 
            return;
        setSelectedLeader(null)
        collaboratorListHandler.clear();
    }, [modalProps.isOpen]);
    const changeLeaderProjectField = (collaborator: CollaboratorUser) => {
        form.change(TEXT_FIELD_PROPS.PROJECT_LEADER.name, collaborator.id);
        console.log(form.value.leaderId)
        setSelectedLeader(collaborator);
    };
    return (
        <Container>
            <Label>Líder del proyecto</Label>
            {selectedLeader ? (
                <CollaboratorCard
                    collaboratorUser={selectedLeader}
                    variant="primary"
                />
            ) : (
                <Wrapper ref={$wrapper}>
                    <CustomInputSearch
                        {...TEXT_FIELD_PROPS.PROJECT_LEADER}
                        options={collaboratorListHandler.value}
                        onChange={changeLeaderProjectField}
                        fillOptions={value =>
                            collaboratorListHandler.fill(value)
                        }
                        variant="primary-search"
                        clearOptions={collaboratorListHandler.clear}
                        maxLength={100}
                        // searchText={}
                        // value={leaderId}
                    />
                </Wrapper>
            )}
        </Container>
    );
};

export default LeaderSelector;
