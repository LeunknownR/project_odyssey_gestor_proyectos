import { useState } from "react";
import { ProfileConfigurationModalProps } from "./types";
import PhotoUploader from "src/components/PhotoUploader";
import {
    CustomModal,
    UserContainer,
    UserDataContainer,
    ChangePasswordButton,
    NamesWrapper,
} from "./styles";
import DataLabel from "./components/DataLabel";
import ModalHeader from "./components/ModalHeader";
import { requestUpdatePhoto } from "src/services/collaboratorConfig/aboutCollaboratorConfig";
import { getB64Value } from "src/utils/fileToBase64";

const MODAL_STYLES = {
    padding: "20px 30px",
};
type test = {
    b64: string | null;
};
const INIT = {
    b64: null,
};
const ProfileConfigurationModal = ({
    modalProps,
    openChangePasswordModal,
    currentCollaborator,
}: ProfileConfigurationModalProps) => {
    const [collaboratorPhoto, setCollaboratorPhoto] = useState<test>({
        ...INIT,
    });
    const [photoError, setPhotoError] = useState<string | null>(null);
    const changePhoto = (file: string) => {
        setCollaboratorPhoto(prev => ({
            ...prev,
            b64: file,
        }));
        updatePhoto(getB64Value(file));
    };
    const changeErrorPhoto = (error: string | null) => {
        setPhotoError(error);
    };
    const deletePhoto = () => {
        setCollaboratorPhoto(prev => ({ ...prev, b64: null }));
        updatePhoto(null);
    };
    const updatePhoto = async (photoInBase64: string | null) => {
        if (!currentCollaborator) return;
        const { data } = await requestUpdatePhoto({
            collaboratorId: currentCollaborator?.id,
            photoInBase64,
        });
        setCollaboratorPhoto(prev => ({...prev}));
        currentCollaborator.urlPhoto = data;
        localStorage.setItem("currentUser", JSON.stringify(currentCollaborator))
    };
    if (!currentCollaborator) return null;
    return (
        <CustomModal {...modalProps} sizeProps={MODAL_STYLES}>
            <ModalHeader modalProps={modalProps} />
            <UserContainer justify="center" gap="70px">
                <PhotoUploader
                    name={currentCollaborator.name}
                    surname={currentCollaborator.surname}
                    data={{
                        b64: collaboratorPhoto.b64,
                        url: currentCollaborator.urlPhoto,
                    }}
                    changePhoto={changePhoto}
                    changeError={changeErrorPhoto}
                    deletePhoto={deletePhoto}
                    error={photoError}
                />
                <UserDataContainer direction="column">
                    <NamesWrapper>
                        <DataLabel
                            label="Nombres"
                            data={currentCollaborator.name}
                        />
                        <DataLabel
                            label="Apellidos"
                            data={currentCollaborator.surname}
                        />
                    </NamesWrapper>
                    <DataLabel
                        label="Usuario"
                        data={currentCollaborator.username}
                    />
                    <DataLabel
                        label="Correo"
                        data={currentCollaborator.email}
                    />
                    <ChangePasswordButton
                        onClick={openChangePasswordModal}
                        content="Cambiar contraseña"
                        icon="bxs:edit"
                        iconAfterText
                    />
                </UserDataContainer>
            </UserContainer>
        </CustomModal>
    );
};

export default ProfileConfigurationModal;