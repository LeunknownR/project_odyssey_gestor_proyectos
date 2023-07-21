import { useState } from "react";
import {
    BackBtn,
    CloseFormBtn,
    Container,
    ContentWrapper,
    DataForm,
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

const CollaboratorForm = ({ currentCollaborator }: CollaboratorFormProps) => {
    const [tabIdx, setTabIdx] = useState(0);
    const { isMobile } = useMainContext();
    const deleteCollaboratorModal = useModal(true);
    const moveTab = (idx: number) => setTabIdx(idx);
    const tabs = [<PersonalDataForm key={0} />, <UserDataForm key={1} />];
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
                <CloseFormBtn
                    onClick={() => console.log("gnomo")}
                    icon="material-symbols:close"
                />
            )}
            <Container
                direction="column"
                justify="center"
                align="center"
                gap="40px"
            >
                <ContentWrapper gap="80px">
                    {tabIdx !== 1 && (
                        <PhotoUploaderWrapper>
                            <PhotoUploader
                                name="Ralf"
                                surname="Carrasco"
                                urlPhoto={null}
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
