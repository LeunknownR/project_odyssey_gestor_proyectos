import { useState } from "react";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import { CollaboratorUser } from "src/entities/collaborator/types";
import useSearchCollaborator from "../ProjectManager/utils/hooks/useSearchCollaborator";
import { requestSearchCollaboratorToBeMemberForCollaborator } from "src/services/collaborators/relatedToCollaborators";

const ProjectDetails = ({
    projectId, value
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
    const addProjectMemmberToAddList = (projectMember: CollaboratorUser) => {
        setProjectMembersToAddList(prev => ([
            ...prev,
            projectMember
        ]));
    }
    const removeProjectMemberToAddList = (projectMemberToDeleteId: number) => {
        setProjectMembersToAddList(prev => prev.filter(({ id }) => id !== projectMemberToDeleteId));
    }
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
        {projectMembersToAddList.map(item => (
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