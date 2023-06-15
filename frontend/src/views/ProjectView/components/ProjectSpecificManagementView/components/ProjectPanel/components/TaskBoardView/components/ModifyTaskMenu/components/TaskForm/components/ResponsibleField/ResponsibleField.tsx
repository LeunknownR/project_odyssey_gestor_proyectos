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

const ResponsibleField = ({
    form,
    currentResponsible,
}: ResponsibleFieldProps) => {
    const [selectedResponsible, setSelectedResponsible] =
        useState<ProjectTaskCollaboratorUser | null>(null);
    const { 
        projectId, 
        isTaskMenuOpen,
        preloader
    } = useTaskBoardContext();
    useEffect(() => {
        if (!currentResponsible) return;
        setSelectedResponsible(currentResponsible);
    }, [isTaskMenuOpen]);
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
    const customSearchInputHandler = useCustomInputSearch({
        clearOptions: selectTaskResponsibleHandler.clear,
        fillOptions: selectTaskResponsibleHandler.fill,
        onChange: setSelectedResponsible,
    });
    // useEffect(() => {
    //     if (modalProps.isOpen) return;
    //     customSearchInputHandler.clear();
    // }, [modalProps.isOpen]);
    useEffect(() => {
        form.change(
            TASK_FIELD_PROPS.TASK_RESPONSIBLE.name,
            selectedResponsible?.id || 0
        );
    }, [selectedResponsible]);
    const eraseSelectedResponsible = () => {
        setSelectedResponsible(null);
        customSearchInputHandler.clear();
    };
    return (
        <>
        <Container align="center" width="100%">
            <Label>Responsable</Label>
            {selectedResponsible ? (
                <SelectedResponsible
                    selectedResponsible={selectedResponsible}
                    eraseSelectedResponsible={eraseSelectedResponsible}
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
