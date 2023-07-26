import { useState, useEffect } from "react";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import { BackButton, Container, FormButton, NextButton } from "./styles";
import { FlexFlow } from "src/components/styles";
import { ActionButtonsProps } from "./types";
import useSettingsViewContext from "src/views/SettingsView/utils/context/useSettingsViewContext";
import {
    requestCreateCollaborator,
    requestUpdateCollaborator,
} from "src/services/collaboratorConfig/aboutCollaboratorConfig";
import { ERROR_TEXTS_AFTER_REQUEST } from "src/views/SettingsView/utils/constants";
import { DEFAULT_NOTIFICATION_CARD } from "src/components/NotificationCard/utils/constants";

const ActionButtons = ({ tabIdx, moveTab, form }: ActionButtonsProps) => {
    const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
    useEffect(() => {
        setBtnDisabled(!form.haveChanges() || !form.isCompleted());
    }, [form]);
    const { isMobile } = useMainContext();
    const {
        currentCollaborator,
        preloader,
        collaboratorsHandler,
        hideForm,
        notificationCard,
    } = useSettingsViewContext();
    const { getCollaboratorFromFormToCreate, getCollaboratorFromFormToUpdate } =
        form;
    const createCollaborator = async () => {
        if (!form.validate()) return;
        preloader.show("Creando colaborador...");
        const newCollaborator = getCollaboratorFromFormToCreate();
        const data = await requestCreateCollaborator(newCollaborator);
        preloader.hide();
        if (!data) return;
        const { message } = data;
        const error = ERROR_TEXTS_AFTER_REQUEST[message];
        if (error) {
            form.errors.change(error.field, error.text);
            return;
        }
        hideForm();
        collaboratorsHandler.fill();
        notificationCard.changeAppearance(DEFAULT_NOTIFICATION_CARD);
        notificationCard.show();
    };
    const updateCollaborator = async () => {
        if (!form.validate()) return;
        preloader.show("Actualizando colaborador...");
        const newCollaborator = getCollaboratorFromFormToUpdate();
        const data = await requestUpdateCollaborator(newCollaborator);
        preloader.hide();
        if (!data) return;
        const { message } = data;
        const error = ERROR_TEXTS_AFTER_REQUEST[message];
        if (error) {
            form.errors.change(error.field, error.text);
            return;
        }
        collaboratorsHandler.fill();
        notificationCard.changeAppearance(DEFAULT_NOTIFICATION_CARD);
        notificationCard.show();
    };
    return (
        <Container width="100%">
            {isMobile && (
                <FlexFlow gap="20px">
                    <BackButton
                        icon="memory:bow-arrow"
                        disabled={tabIdx === 0}
                        onClick={() => moveTab(0)}
                    />
                    <NextButton
                        icon="memory:bow-arrow"
                        disabled={tabIdx === 1}
                        onClick={() => moveTab(1)}
                    />
                </FlexFlow>
            )}
            <FormButton
                onClick={
                    currentCollaborator
                        ? updateCollaborator
                        : createCollaborator
                }
                content={currentCollaborator ? "Actualizar" : "Crear"}
                disabled={btnDisabled}
                variant="main"
            />
        </Container>
    );
};

export default ActionButtons;
