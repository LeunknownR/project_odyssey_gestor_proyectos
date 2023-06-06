/* eslint-disable @typescript-eslint/no-empty-function */
import { useState, useEffect } from "react";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import useCustomInputSearch from "src/components/CustomInputSearch/utils/hooks/useCustomInputSearch";
import useSearchCollaborator from "src/views/ProjectManager/utils/hooks/useSearchCollaborator";
import CustomInputSearchUserOption from "src/views/components/CustomInputSearchUserOption/CustomInputSearchUserOption";
import { TASK_FIELD_PROPS } from "../../../../utils/constants";
import { Container } from "./styles";
import { CollaboratorUser } from "src/entities/collaborator/entities";
import { requestSearchCollaboratorForGeneralAdmin } from "src/services/collaborators/relatedToCollaborators";
import { Label } from "../../styles";

const ResponsibleField = () => {
    const [selectedResponsible, setSelectedResponsible] =
        useState<CollaboratorUser | null>(null);
    // useEffect(() => {
    //     if (!currentLeader || !modalProps.isOpen) return;
    //     setSelectedCollaborator(currentLeader);
    // }, [modalProps.isOpen]);
    const selectTaskResponsibleHandler = useSearchCollaborator({
        requestSearchCollaborators: async (collaboratorName: string) => {
            // preloader.show("Buscando colaboradores...")
            const { data } = await requestSearchCollaboratorForGeneralAdmin(
                collaboratorName
            );
            // preloader.hide();
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
    // useEffect(() => {
    //     form.change(
    //         TEXT_FIELD_PROPS.PROJECT_LEADER.name,
    //         selectedCollaborator?.id || 0
    //     );
    // }, [selectedCollaborator]);
    const eraseSelectedResponsible = () => {
        setSelectedResponsible(null);
        customSearchInputHandler.clear();
    };
    return (
        <Container align="center" width="100%">
            <Label>Responsable</Label>
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
        </Container>
    );
};

export default ResponsibleField;
