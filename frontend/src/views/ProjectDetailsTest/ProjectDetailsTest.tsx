import { useState } from "react";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import { CollaboratorUser } from "src/entities/collaborator/types";
import useSearchCollaborator from "../ProjectManager/utils/hooks/useSearchCollaborator";
import { requestSearchCollaboratorToBeMemberForCollaborator } from "src/services/collaborators/relatedToCollaborators";
import useCustomInputSearch from "src/components/CustomInputSearch/utils/hooks/useCustomInputSearch";
import { Icon } from "@iconify/react/dist/iconify.js";
import { TrashIcon } from "./styles";

const ProjectDetailsTest = ({
    projectId
}: any) => {
    const [projectMembersToAddList, setProjectMembersToAddList] = useState<CollaboratorUser[]>([]);
    const selectProjectMemberHandler = useSearchCollaborator({
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
        clearOptions: selectProjectMemberHandler.clear,
        fillOptions: selectProjectMemberHandler.fill,
        onChange: addProjectMemberToAddList
    });
    return (
        <>
        <CustomInputSearch<CollaboratorUser>
            placeholder="Ejm: Ral"
            options={selectProjectMemberHandler.collaboratorUserList}
            getSearchedItemToShow={option => ({ 
                value: option.id,
                text: selectProjectMemberHandler.getText(option),
                urlPhoto: option.urlPhoto
            })}
            onChange={customSearchInputHandler.changeSearchText}
            selectOption={customSearchInputHandler.selectOption}
            value={customSearchInputHandler.searchText}
            variant="primary-search"
            maxLength={100}
        />
        {projectMembersToAddList.length === 0
        ? <empty/>
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
            Foto y nombres
            <TrashIcon>
                <Icon icon="mdi:trash-can-outline" onClick={() => onRemove(item.id)}/>
            </TrashIcon>
        </>
    );
}

export default ProjectDetailsTest;