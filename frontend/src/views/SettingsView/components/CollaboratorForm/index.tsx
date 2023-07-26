import { useState } from "react";
import {
    BackBtn,
    CloseFormBtn,
    Container,
    ContentWrapper,
    DataForm,
    DeleteCollaboratorBtn,
    MobileHeader,
    PhotoUploaderWrapper,
} from "./styles";
import PhotoUploader from "src/components/PhotoUploader";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import PersonalDataForm from "./components/PersonalDataForm";
import UserDataForm from "./components/UserDataForm";
import ActionButtons from "./components/ActionButtons";
import DeleteCollaboratorModal from "./components/DeleteCollaboratorModal";
import useModal from "src/components/Modal/utils/hooks/useModal";
import useSettingsViewContext from "../../utils/context/useSettingsViewContext";
import useCollaboratorForm from "./utils/hooks/useCollaboratorForm";
import { requestDeleteCollaborator } from "src/services/collaboratorConfig/aboutCollaboratorConfig";
import { DELETE_COLLABORATOR_APPEARANCE } from "./utils/constants";

const CollaboratorForm = () => {
    const [tabIdx, setTabIdx] = useState(0);
    const { isMobile } = useMainContext();
    const {
        currentCollaborator,
        hideForm,
        preloader,
        collaboratorsHandler,
        setCurrentCollaborator,
        notificationCard
    } = useSettingsViewContext();
    const deleteCollaboratorModal = useModal();
    const form = useCollaboratorForm(currentCollaborator);
    const moveTab = (idx: number) => setTabIdx(idx);
    const changePhoto = (file: string) => {
        form.change("collaboratorPhotoB64", file);
        form.change("collaboratorChangePhoto", true);
    };
    const changeErrorPhoto = (error: string | null) => {
        form.errors.change("collaboratorPhoto", error);
    };
    const deletePhoto = () => {
        form.change("collaboratorUrlPhoto", null);
        form.change("collaboratorPhotoB64", null);
        form.change("collaboratorChangePhoto", true);
    };
    const deleteCollaborator = async () => {
        if (!currentCollaborator) return;
        preloader.show("Eliminando colaborador...");
        const success = await requestDeleteCollaborator(currentCollaborator.id);
        preloader.hide();
        if (!success) return;
        collaboratorsHandler.fill();
        hideForm();
        deleteCollaboratorModal.open(false);
        setCurrentCollaborator(null);
        notificationCard.changeAppearance(DELETE_COLLABORATOR_APPEARANCE);
        notificationCard.show()
    };
    const tabs = [
        <PersonalDataForm key={0} form={form} />,
        <UserDataForm key={1} form={form} />,
    ];
    return (
        <>
        {isMobile ? (
            <MobileHeader align="center" gap="3px">
                <BackBtn
                    onClick={() => console.log("back")}
                    icon="ion:chevron-back"
                />
                <h2>
                    {currentCollaborator
                        ? "ACTUALIZAR COLABORADOR"
                        : "CREAR COLABORADOR"}
                </h2>
            </MobileHeader>
        ) : (
            <>
                {!currentCollaborator && (
                    <CloseFormBtn
                        icon="material-symbols:close"
                        onClick={hideForm}
                    />
                )}
            </>
        )}
        <Container
            className="custom-scrollbar"
            direction="column"
            justify="center"
            align="center"
            gap="30px"
        >
            {currentCollaborator && (
                <DeleteCollaboratorBtn
                    icon="material-symbols:delete"
                    onClick={() => deleteCollaboratorModal.open(true)}
                />
            )}
            <ContentWrapper gap="80px">
                {tabIdx !== 1 && (
                    <PhotoUploaderWrapper>
                        <PhotoUploader
                            name={form.value.collaboratorName}
                            surname={form.value.collaboratorSurname}
                            data={{
                                b64: form.value.collaboratorPhotoB64,
                                url: form.value.collaboratorUrlPhoto,
                            }}
                            changePhoto={changePhoto}
                            error={form.errors.value.collaboratorPhoto}
                            changeError={changeErrorPhoto}
                            deletePhoto={deletePhoto}
                        />
                    </PhotoUploaderWrapper>
                )}
                <DataForm direction="column" gap="30px">
                    {isMobile ? tabs[tabIdx] || tabs[0] : tabs}
                </DataForm>
            </ContentWrapper>
            <ActionButtons tabIdx={tabIdx} moveTab={moveTab} form={form} />
        </Container>
        <DeleteCollaboratorModal
            modalProps={deleteCollaboratorModal}
            deleteCollaborator={deleteCollaborator}
        />
        </>
    );
};

export default CollaboratorForm;
