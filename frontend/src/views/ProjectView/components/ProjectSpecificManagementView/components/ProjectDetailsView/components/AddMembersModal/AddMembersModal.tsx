import { AddMembersModalProps } from "./types";
import { BodyWrapper, StyledModal } from "./styles";
import Footer from "./components/Footer/Footer";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import Header from "./components/Header/Header";
import { requestAddMemberToProject, requestSearchCollaboratorToBeMemberForCollaborator } from "src/services/collaborators/relatedToCollaborators";
import { useEffect, useState } from "react";
import { CollaboratorUser } from "src/entities/collaborator/entities";
import useCustomInputSearch from "src/components/CustomInputSearch/utils/hooks/useCustomInputSearch";
import { ResponseBody } from "src/services/types";
import ProjectMemberToAddList from "./components/ProjectMemberList/ProjectMemberToAddList";
import CustomInputSearchUserOption from "src/views/components/CustomInputSearchUserOption/CustomInputSearchUserOption";
import useSearchCollaborator from "src/views/ProjectView/components/ProjectManagerView/utils/hooks/useSearchCollaborator";
import { ADD_MEMBER_APPEARANCE } from "./utils/constants";

const MODAL_STYLES = {
    padding: "0px",
    minWidth: "600px",
    borderRadius: "0"
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
        requestSearchCollaborators: async collaboratorName => {
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
    function addProjectMemberToAddList(collaboratorUser: CollaboratorUser | null): void {
        if (!collaboratorUser) return;
        setProjectMembersToAddList((prev) => [...prev, collaboratorUser]);
    }
    const removeProjectMemberToAddList = (projectMemberToDeleteId: number): void => {
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
        notificationCard.changeAppearance(ADD_MEMBER_APPEARANCE);
        notificationCard.show();
    };
    //#endregion
    return (
        <StyledModal {...modalProps} sizeProps={MODAL_STYLES}>
            <Header />
            <BodyWrapper>
                <CustomInputSearch<CollaboratorUser>
                    placeholder="Ejm: Ralf Carrasco Stein"
                    handler={customSearchInputHandler}
                    options={selectProjectMemberHandler.collaboratorUserList}
                    clearOptions={selectProjectMemberHandler.clear}
                    fillOptions={selectProjectMemberHandler.fill}
                    getSearchedItemToShow={options => ({ 
                        value: options.id,
                        content: (
                            <CustomInputSearchUserOption {...options}/>
                        )
                    })}
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
        </StyledModal>
    );
};

export default AddMembersModal;