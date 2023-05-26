import Modal from "src/components/Modal/Modal";
import { AddMembersModalProps } from "./types";
import { BodyWrapper } from "./styles";
import Footer from "./components/Footer/Footer";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import Header from "./components/Header/Header";
import useSearchCollaborator from "src/views/ProjectManager/utils/hooks/useSearchCollaborator";
import { requestAddMemberToProject, requestSearchCollaboratorToBeMemberForCollaborator } from "src/services/collaborators/relatedToCollaborators";
import { useEffect, useState } from "react";
import { CollaboratorUser } from "src/entities/collaborator/types";
import useCustomInputSearch from "src/components/CustomInputSearch/utils/hooks/useCustomInputSearch";
import { ResponseBody } from "src/services/types";
import UserImage from "src/views/components/UserImage/UserImage";
import { Row } from "src/components/styles";
import ProjectMemberToAddList from "./components/ProjectMemberList/ProjectMemberToAddList";

const testModalStyles = {
    padding: "0px",
    minWidth: "600px",
};
const AddMembersModal = ({ 
    modalProps, fillProjectDetails,
    preloader, notificationCard, 
    projectId 
}: AddMembersModalProps) => {
    //#region States
    const [projectMembersToAddList, setProjectMembersToAddList] = useState<CollaboratorUser[]>([]);
    //#endregion
    useEffect(() => {
        if (modalProps.isOpen) return;
        setProjectMembersToAddList([]);
    }, [modalProps.isOpen]);
    const selectProjectMemberHandler = useSearchCollaborator({
        requestSearchCollaborators: async (collaboratorName: string) => {
            preloader.show("Buscando...");
            const { data } = await requestSearchCollaboratorToBeMemberForCollaborator({
                projectId,
                collaboratorName
            });
            preloader.hide();
            return data.filter(({ id }) => !projectMembersToAddList.some(projectMember => projectMember.id === id));
        },
    });
    const customSearchInputHandler = useCustomInputSearch<CollaboratorUser>({
        clearOptions: selectProjectMemberHandler.clear,
        fillOptions: selectProjectMemberHandler.fill,
        onChange: addProjectMemberToAddList,
    });
    //#region Functions
    function addProjectMemberToAddList(collaboratorUser: CollaboratorUser | null) {
        if (!collaboratorUser) return;
        setProjectMembersToAddList((prev) => [...prev, collaboratorUser]);
    };
    const removeProjectMemberToAddList = (projectMemberToDeleteId: number) => {
        setProjectMembersToAddList((prev) => prev.filter(({ id }) => id !== projectMemberToDeleteId));
    };
    const addMembersToProject = async (): Promise<void> => {
        const projectMembersToAddListIds: number[] = projectMembersToAddList.map(({ id }) => id);
        preloader.show("Agregando miembros...");
        const { message }: ResponseBody = await requestAddMemberToProject({
            membersIds: projectMembersToAddListIds,
            projectId
        });
        preloader.hide();
        if (message !== "SUCCESS") return;
        modalProps.open(false);
        await fillProjectDetails();
        notificationCard.show();
    };
    //#endregion
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <Header />
            <BodyWrapper>
                <CustomInputSearch<CollaboratorUser>
                    placeholder="Ejm: Ralf Carrasco Stein"
                    options={selectProjectMemberHandler.collaboratorUserList}
                    clearOptions={selectProjectMemberHandler.clear}
                    getSearchedItemToShow={(option) => {
                        const {
                            id, name, surname, urlPhoto
                        } = option;
                        return ({ 
                            value: id,
                            content: (
                                <Row align="center" gap="10px">
                                    <UserImage 
                                        className="small"
                                        name={name} surname={surname}
                                        urlPhoto={urlPhoto}/>
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
                <ProjectMemberToAddList 
                    projectMemberList={projectMembersToAddList}
                    removeProjectMember={removeProjectMemberToAddList}/>
            </BodyWrapper>
            <Footer
                closeModal={() => modalProps.open(false)}
                addMembersToProject={addMembersToProject}
                noProjectMembers={projectMembersToAddList.length === 0}
            />
        </Modal>
    );
};

export default AddMembersModal;