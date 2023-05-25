import Modal from "src/components/Modal/Modal";
import { AddMembersChangesModalProps } from "./types";
import { BodyWrapper, IconContainer, IconText, NewMemberIcon } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "./components/Footer/Footer";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import Header from "./components/Header/Header";
import useSearchCollaborator from "src/views/ProjectManager/utils/hooks/useSearchCollaborator";
import { requestSearchCollaboratorToBeMemberForCollaborator } from "src/services/collaborators/relatedToCollaborators";
import { useState } from "react";
import { CollaboratorUser } from "src/entities/collaborator/types";
import useCustomInputSearch from "src/components/CustomInputSearch/utils/hooks/useCustomInputSearch";
import MemberListItem from "./components/MemberListItem/MemberListItem";

const testModalStyles = {
    padding: "0px",
    minWidth: "600px",
};
const PROVISIONAL_OPTIONS = [
    {
        id: 1,
        name: "asdasd",
    },
];
const AddMembersModal = ({ modalProps, preloader, projectId }: AddMembersChangesModalProps) => {
    const [projectMembersToAddList, setProjectMembersToAddList] = useState<CollaboratorUser[]>([]);
    const selectProjectMemberHandler = useSearchCollaborator({
        requestSearchCollaborators: async (collaboratorName: string) => {
            const { data } = await requestSearchCollaboratorToBeMemberForCollaborator({
                projectId,
                collaboratorName,
            });
            return data;
        },
    });
    const addProjectMemberToAddList = (collaboratorUser: CollaboratorUser | null) => {
        if (!collaboratorUser) return;
        setProjectMembersToAddList((prev) => [...prev, collaboratorUser]);
    };
    const removeProjectMemberToAddList = (projectMemberToDeleteId: number) => {
        setProjectMembersToAddList((prev) => prev.filter(({ id }) => id !== projectMemberToDeleteId));
    };
    const customSearchInputHandler = useCustomInputSearch<CollaboratorUser>({
        clearOptions: selectProjectMemberHandler.clear,
        fillOptions: selectProjectMemberHandler.fill,
        onChange: addProjectMemberToAddList,
    });
    const addMembersToProject = (): void => {
        const projectMembersToAddListIds = projectMembersToAddList.map(memberId => (
            return 
        ))
    };   
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <Header />
            <BodyWrapper>
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
        ?   <NewMemberIcon>
            <IconContainer>
                <Icon icon="mdi:user-add" />
            </IconContainer>
            <IconText>Elija un nuevo miembro para el proyecto</IconText>
            </NewMemberIcon>
        : projectMembersToAddList.map(memberProject => (
            <MemberListItem memberProject={memberProject} onRemove={removeProjectMemberToAddList}/>
        ))}
            </BodyWrapper>
            <Footer
                closeModal={() => modalProps.open(false)}
                addMembersToProject={addMembersToProject}
            />
        </Modal>
    );
};

export default AddMembersModal;