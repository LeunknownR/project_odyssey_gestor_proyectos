import { useState, useEffect } from "react";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import useCustomInputSearch from "src/components/CustomInputSearch/utils/hooks/useCustomInputSearch";
import CustomInputSearchUserOption from "src/views/components/CustomInputSearchUserOption/CustomInputSearchUserOption";
import { TASK_FIELD_PROPS } from "../../../../utils/constants";
import { Container } from "./styles";
import { requestSearchCollaboratorToBeMemberForCollaborator } from "src/services/collaborators/relatedToCollaborators";
import { Label } from "../../styles";
import { ResponsibleFieldProps } from "./types";
import { ProjectTaskCollaboratorUser } from "src/entities/projectTasks/entities";
import SelectedResponsible from "./components/SelectedResponsible/SelectedResponsible";
import useSearchCollaborator from "src/views/ProjectView/components/ProjectManagerView/utils/hooks/useSearchCollaborator";
import useTaskBoardContext from "../../../../../../utils/contexts/useTaskBoardContext";
import { TaskUpdateType } from "../../../../utils/enums";

const ResponsibleField = ({
    form,
    currentResponsible,
    changeTaskUpdateType
}: ResponsibleFieldProps) => {
    const [selectedResponsible, setSelectedResponsible] =
        useState<ProjectTaskCollaboratorUser | null>(null);
    const { 
        projectId, 
        isTaskMenuOpen,
        preloader
    } = useTaskBoardContext();
    useEffect(() => {
        if (currentResponsible) {
            changeSelectedResponsible(currentResponsible);
            return;
        }
        if (!isTaskMenuOpen) {
            changeSelectedResponsible(null);
            return;
        }
    }, [isTaskMenuOpen]);
    useEffect(() => {
        setSelectedResponsible(currentResponsible);
    }, [currentResponsible]);
    const selectTaskResponsibleHandler = useSearchCollaborator({
        requestSearchCollaborators: async (collaboratorName: string) => {
            preloader.show("Buscando colaboradores...")
            const { data } = await requestSearchCollaboratorToBeMemberForCollaborator({
                collaboratorName,
                projectId,
            });
            preloader.hide();
            return data;
        },
    });
    const changeSelectedResponsible = (newResponsible: ProjectTaskCollaboratorUser | null) => {
        setSelectedResponsible(newResponsible);
        form.change(TASK_FIELD_PROPS.TASK_RESPONSIBLE.name, newResponsible?.id || null);
        changeTaskUpdateType(TaskUpdateType.Immediate);
    }
    const customSearchInputHandler = useCustomInputSearch<ProjectTaskCollaboratorUser>({
        clearOptions: selectTaskResponsibleHandler.clear,
        fillOptions: selectTaskResponsibleHandler.fill,
        onChange: changeSelectedResponsible
    });
    const removeSelectedResponsible = () => {
        changeSelectedResponsible(null);
        customSearchInputHandler.clear();
    };
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
                <CustomInputSearch
                    {...TASK_FIELD_PROPS.TASK_RESPONSIBLE}
                    variant="primary-search"
                    handler={customSearchInputHandler}
                    clearOptions={selectTaskResponsibleHandler.clear}
                    fillOptions={selectTaskResponsibleHandler.fill}
                    options={selectTaskResponsibleHandler.collaboratorUserList}
                    getSearchedItemToShow={options => ({
                        value: options.id,
                        content: <CustomInputSearchUserOption {...options} />,
                    })}
                />
            )}
        </Container>
        </>
    );
};

export default ResponsibleField;
