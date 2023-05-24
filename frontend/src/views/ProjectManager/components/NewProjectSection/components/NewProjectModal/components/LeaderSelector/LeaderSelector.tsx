import { useState } from "react";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import { TEXT_FIELD_PROPS } from "src/views/ProjectManager/utils/constants";
import { LeaderSelectorProps } from "./types";
import useCollaboratorList from "src/views/ProjectManager/utils/hooks/useCollaboratoriList";
import { Container, Label } from "./styles";
import { CollaboratorUser } from "src/entities/collaborator/types";

const LeaderSelector = ({ form }: LeaderSelectorProps) => {
    const [selectedLeader, setSelectedLeader] = useState<CollaboratorUser | null>(null);
    const collaboratorListHandler = useCollaboratorList();
    const changeLeaderProjectField = (collaborator: CollaboratorUser) => {
        console.log("putamareputamre")
        form.change(TEXT_FIELD_PROPS.PROJECT_LEADER.name, collaborator.id);
        setSelectedLeader(collaborator)
    };
    return (
        <Container>
            <Label>Líder del proyecto</Label>
            {selectedLeader ? (
                <h1>{selectedLeader.name}</h1>
            ) : (
                <CustomInputSearch
                    {...TEXT_FIELD_PROPS.PROJECT_LEADER}
                    options={collaboratorListHandler.value}
                    onChange={changeLeaderProjectField}
                    fillOptions={value => collaboratorListHandler.fill(value)}
                    variant="primary-search"
                    clearOptions={collaboratorListHandler.clear}
                    maxLength={100}
                    // value={leaderId}
                />
            )}
        </Container>
    );
};

export default LeaderSelector;
