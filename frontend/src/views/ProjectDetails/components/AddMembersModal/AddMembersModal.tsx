import Modal from "src/components/Modal/Modal";
import { AddMembersModalProps } from "./types";
import { BodyWrapper, IconContainer, IconText, NewMemberIcon } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "./components/Footer/Footer";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import Header from "./components/Header/Header";
import useSearchCollaborator from "src/views/ProjectManager/utils/hooks/useSearchCollaborator";
import { requestAddMemberToProject, requestSearchCollaboratorToBeMemberForCollaborator } from "src/services/collaborators/relatedToCollaborators";
import { useState } from "react";
import { CollaboratorUser } from "src/entities/collaborator/types";
import useCustomInputSearch from "src/components/CustomInputSearch/utils/hooks/useCustomInputSearch";
import MemberListItem from "./components/MemberListItem/MemberListItem";
import { ResponseBody } from "src/services/types";
import UserImage from "src/views/components/UserImage/UserImage";
import { Row } from "src/components/styles";

const testModalStyles = {
    padding: "0px",
    minWidth: "600px",
};
const AddMembersModal = ({ 
    modalProps, 
    preloader, notificationCard, 
    projectId 
}: AddMembersModalProps) => {
    //#region States
    const [projectMembersToAddList, setProjectMembersToAddList] = useState<CollaboratorUser[]>([]);
    //#endregion
    const selectProjectMemberHandler = useSearchCollaborator({
        requestSearchCollaborators: async (collaboratorName: string) => {
            preloader.show("Buscando...");
            const { data } = await requestSearchCollaboratorToBeMemberForCollaborator({
                projectId,
                collaboratorName,
            });
            console.log(data);
            preloader.hide();
            return data;
        },
    });
    //#region Functions
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
    const addMembersToProject = async (): Promise<void> => {
        const projectMembersToAddListIds: number[] = projectMembersToAddList.map(({ id }) => id);
        preloader.show("Agregando miembros...");
        const { message }: ResponseBody = await requestAddMemberToProject({
            membersIds: projectMembersToAddListIds,
            projectId
        });
        preloader.hide();
        if (message !== "SUCCESS") return;
        notificationCard.show();
    };
    //#endregion
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <Header />
            <BodyWrapper>
                <CustomInputSearch<CollaboratorUser>
                    placeholder="Ejm: Ral"
                    options={selectProjectMemberHandler.collaboratorUserList}
                    getSearchedItemToShow={(option) => {
                        const {
                            id, name, surname, urlPhoto
                        } = option;
                        return ({ 
                            value: id,
                            content: (
                                <Row>
                                    <UserImage 
                                        nameInitialsClassName="small"
                                        name={name} surname={surname}
                                        userPhoto={urlPhoto}/>
                                    {selectProjectMemberHandler.getText(option)}
                                </Row>
                            )
                        });
                    }}
                    onChange={customSearchInputHandler.changeSearchText}
                    selectOption={customSearchInputHandler.selectOption}
                    value={customSearchInputHandler.searchText}
                    variant="primary-search"
                    maxLength={100}
                />
                {projectMembersToAddList.length === 0
                ? <NewMemberIcon>
                    <IconContainer>
                        <Icon icon="mdi:user-add" />
                    </IconContainer>
                    <IconText>Elija un nuevo miembro para el proyecto</IconText>
                </NewMemberIcon>
                : projectMembersToAddList.map(memberProject => (
                    <MemberListItem 
                        memberProject={memberProject} 
                        onRemove={removeProjectMemberToAddList}/>
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