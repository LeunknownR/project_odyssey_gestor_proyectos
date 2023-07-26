import {useState, useEffect} from "react";
import { ProfileConfigurationModalProps } from "./types";
import PhotoUploader from "src/components/PhotoUploader";
import { FAKE_DATA } from "../../mock";
import {
    CustomModal,
    UserContainer,
    UserDataContainer,
    ChangePasswordButton,
    NamesWrapper,
} from "./styles";
import DataLabel from "./components/DataLabel";
import ModalHeader from "./components/ModalHeader";

const MODAL_STYLES = {
    padding: "20px 30px",
};

const ProfileConfigurationModal = ({
    modalProps,
    openChangePasswordModal,
    currentCollaborator
}: ProfileConfigurationModalProps) => {
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
    if (!currentCollaborator) return null;
    return (
        <CustomModal {...modalProps} sizeProps={MODAL_STYLES}>
            <ModalHeader modalProps={modalProps} />
            <UserContainer justify="center" gap="70px">
                <PhotoUploader
                    name={currentCollaborator.name}
                    surname={currentCollaborator.surname}
                    data={{
                        b64: "",
                        url: currentCollaborator.urlPhoto,
                    }}
                    changePhoto={changePhoto}
                    changeError={changeErrorPhoto}
                    deletePhoto={deletePhoto}
                />
                <UserDataContainer direction="column">
                    <NamesWrapper>
                        <DataLabel label="Nombres" data={currentCollaborator.name} />
                        <DataLabel label="Apellidos" data={currentCollaborator.surname} />
                    </NamesWrapper>
                    <DataLabel label="Usuario" data={currentCollaborator.username} />
                    <DataLabel label="Correo" data={currentCollaborator.email} />
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
