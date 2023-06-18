import { useState, useEffect } from "react";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import useCustomInputSearch from "src/components/CustomInputSearch/utils/hooks/useCustomInputSearch";
import CustomInputSearchUserOption from "src/views/components/CustomInputSearchUserOption/CustomInputSearchUserOption";
import { TASK_FIELD_PROPS } from "../../../../utils/constants";
import { Container, SelfAssignmentButton } from "./styles";
import { requestSearchCollaboratorToBeMemberForCollaborator } from "src/services/collaborators/relatedToCollaborators";
import { Label } from "../../styles";
import { ResponsibleFieldProps } from "./types";
import { ProjectTaskCollaboratorUser } from "src/entities/projectTasks/entities";
import SelectedResponsible from "./components/SelectedResponsible/SelectedResponsible";
import useSearchCollaborator from "src/views/ProjectView/components/ProjectManagerView/utils/hooks/useSearchCollaborator";
import useTaskBoardContext from "../../../../../../utils/contexts/useTaskBoardContext";
import { currentUserLocalStorage } from "src/storage/user.local";
import { User } from "src/entities/user/types";
import { FlexFlow } from "src/components/styles";

const ResponsibleField = ({
    form,
    currentResponsible,
    doUpdateTask
}: ResponsibleFieldProps) => {
    const [selectedResponsible, setSelectedResponsible] =
        useState<ProjectTaskCollaboratorUser | null>(null);
    const { projectId, isTaskMenuOpen, preloader, canEditTask } = useTaskBoardContext();
    useEffect(() => {
        setSelectedResponsible(isTaskMenuOpen ? currentResponsible : null);
    }, [isTaskMenuOpen, currentResponsible]);
    const selectTaskResponsibleHandler = useSearchCollaborator({
        requestSearchCollaborators: async (collaboratorName: string) => {
            preloader.show("Buscando colaboradores...");
            const { data } =
                await requestSearchCollaboratorToBeMemberForCollaborator({
                    collaboratorName,
                    projectId,
                });
            preloader.hide();
            return data;
        },
    });
    const changeSelectedResponsible = (
        newResponsible: ProjectTaskCollaboratorUser | null
    ): void => {
        setSelectedResponsible(newResponsible);
        form.change(
            TASK_FIELD_PROPS.TASK_RESPONSIBLE.name,
            newResponsible?.id || null
        );
        doUpdateTask();
    };
    const customSearchInputHandler =
        useCustomInputSearch<ProjectTaskCollaboratorUser>({
            clearOptions: selectTaskResponsibleHandler.clear,
            fillOptions: selectTaskResponsibleHandler.fill,
            onChange: changeSelectedResponsible,
        });
    const removeSelectedResponsible = (): void => {
        changeSelectedResponsible(null);
        customSearchInputHandler.clear();
    };
    const autoAssignmentResponsible = (): void => {
        const currentUser: User = currentUserLocalStorage.get();
        const newResponsible: ProjectTaskCollaboratorUser = {
            id: currentUser.id,
            name: currentUser.name,
            surname: currentUser.surname,
            urlPhoto: currentUser.urlPhoto
        }
        changeSelectedResponsible(newResponsible);
    }
    return (
        <>
        <Container align="center" width="100%">
            <Label>Responsable</Label>
            {selectedResponsible ? (
                <SelectedResponsible
                    selectedResponsible={selectedResponsible}
                    eraseSelectedResponsible={removeSelectedResponsible}
                />
            ) : (
                <FlexFlow gap="10px">
                <CustomInputSearch
                    {...TASK_FIELD_PROPS.TASK_RESPONSIBLE}
                    variant="primary-search"
                    handler={customSearchInputHandler}
                    clearOptions={selectTaskResponsibleHandler.clear}
                    fillOptions={selectTaskResponsibleHandler.fill}
                    options={selectTaskResponsibleHandler.collaboratorUserList}
                    disabled={!canEditTask}
                    getSearchedItemToShow={options => ({
                        value: options.id,
                        content: (
                            <CustomInputSearchUserOption {...options} />
                        ),
                    })}
                />
                {canEditTask && 
                    <SelfAssignmentButton
                        content="Asígnamela"
                        onClick={autoAssignmentResponsible}
                    />}
                </FlexFlow>
            )}
        </Container>
        </>
    );
};

export default ResponsibleField;