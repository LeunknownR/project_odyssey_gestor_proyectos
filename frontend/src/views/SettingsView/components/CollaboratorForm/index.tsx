/* eslint-disable no-constant-condition */
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
import { CollaboratorFormProps } from "./types";
import DeleteCollaboratorModal from "./components/DeleteCollaboratorModal";
import useModal from "src/components/Modal/utils/hooks/useModal";
import useSettingsViewContext from "../../utils/context/useSettingsViewContext";

const CollaboratorForm = ({ hideForm }: CollaboratorFormProps) => {
    const [tabIdx, setTabIdx] = useState(0);
    const { isMobile } = useMainContext();
    const { currentCollaborator } = useSettingsViewContext();
    const deleteCollaboratorModal = useModal();
    const moveTab = (idx: number) => setTabIdx(idx);
    const tabs = [<PersonalDataForm key={0} />, <UserDataForm key={1} />];
    const changePhoto = (file: string) => {
        // form.change("collaboratorPhotoB64", file);
        // form.change("collaboratorChangePhoto", true);
    };
    const changeErrorPhoto = (error: string | null) => {
        // errors.change("collaboratorPhoto", error);
    };
    const deletePhoto = () => {
        // if (!form.value.collaboratorPhotoUrl && !form.value.collaboratorPhotoB64) return;
        // form.change("collaboratorPhotoUrl", null);
        // form.change("collaboratorPhotoB64", null);
        // form.change("collaboratorChangePhoto", true);
    };
    return (
        <>
        {isMobile ? (
            <MobileHeader align="center" gap="8px">
                <BackBtn
                    onClick={() => console.log("back")}
                    icon="ion:chevron-back"
                />
                <h2>{currentCollaborator ? "ACTUALIZAR COLABORADOR" : "CREAR COLABORADOR"}</h2>
            </MobileHeader>
        ) : (
            <>
            {!currentCollaborator && <CloseFormBtn
                icon="material-symbols:close"
                onClick={hideForm}/>}
            </>
        )}
        <Container
            direction="column"
            justify="center"
            align="center"
            gap="40px"
        >
            {currentCollaborator && 
                <DeleteCollaboratorBtn 
                    icon="material-symbols:delete" 
                    onClick={() => console.log("borrar")} /> }
            <ContentWrapper gap="80px">
                {tabIdx !== 1 && (
                    <PhotoUploaderWrapper>
                        <PhotoUploader
                            name="Ralf"
                            surname="Carrasco"
                            data={{
                                b64: "",
                                url: ""
                            }}
                            changePhoto={changePhoto}
                            changeError={changeErrorPhoto}
                            deletePhoto={deletePhoto}
                        />
                    </PhotoUploaderWrapper>
                )}
                <DataForm direction="column" gap="30px">
                    {isMobile ? tabs[tabIdx] || tabs[0] : tabs}
                </DataForm>
            </ContentWrapper>
            <ActionButtons tabIdx={tabIdx} moveTab={moveTab} />
        </Container>
        <DeleteCollaboratorModal modalProps={deleteCollaboratorModal}/>
        </>
    );
};

export default CollaboratorForm;
