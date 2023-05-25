import { useState } from "react";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import { CollaboratorUser } from "src/entities/collaborator/types";
import useSearchCollaborator from "../ProjectManager/utils/hooks/useSearchCollaborator";
import { requestSearchCollaboratorToBeMemberForCollaborator } from "src/services/collaborators/relatedToCollaborators";
import useCustomInputSearch from "src/components/CustomInputSearch/utils/hooks/useCustomInputSearch";

const ProjectDetails = ({
    projectId
}: any) => {
    const [projectMembersToAddList, setProjectMembersToAddList] = useState<CollaboratorUser[]>([]);
    const selectProjectLeaderHandler = useSearchCollaborator({
        requestSearchCollaborators: async (collaboratorName: string) => {
            const { data } = await requestSearchCollaboratorToBeMemberForCollaborator({
                projectId, collaboratorName
            });
            return data;
        }
    });
    const addProjectMemberToAddList = (collaboratorUser: CollaboratorUser | null) => {
        if (!collaboratorUser) return;
        setProjectMembersToAddList(prev => ([
            ...prev,
            collaboratorUser
        ]));
    }
    const removeProjectMemberToAddList = (projectMemberToDeleteId: number) => {
        setProjectMembersToAddList(prev => prev.filter(({ id }) => id !== projectMemberToDeleteId));
    }
    const customSearchInputHandler = useCustomInputSearch<CollaboratorUser>({
        clearOptions: selectProjectLeaderHandler.clear,
        fillOptions: selectProjectLeaderHandler.fill,
        onChange: addProjectMemberToAddList
    });
    return (
        <>
        <CustomInputSearch<CollaboratorUser>
            placeholder="Ejm: Ral"
            options={selectProjectLeaderHandler.collaboratorUserList}
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
        {projectMembersToAddList.length === 0
        ? <Empty/>
        : projectMembersToAddList.map(item => (
            <Item item={item} onRemove={removeProjectMemberToAddList}/>
        ))}
        </>
    );
}
const Item = ({
    item,
    onRemove
}: any) => {
    return (
        <>
            {/* Foto y nombres */}
            <TrashIcon onClick={() => onRemove(item.id)}/>
        </>
    );
}

export default ProjectDetails;