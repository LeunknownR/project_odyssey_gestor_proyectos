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
import useMasterRouterContext from "src/routes/utils/context/useMasterRouterContext";
import { currentUserLocalStorage } from "src/storage/user.local";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import { SessionUser } from "src/entities/user/types";

const MODAL_STYLES = {
    padding: "20px 30px",
};
const ProfileConfigurationModal = ({
    modalProps, openChangePasswordModal,
    currentCollaborator, fillCurrentCollaboratorUrlPhoto
}: ProfileConfigurationModalProps) => {
    const { preloader } = useMainContext();
    const { fillCurrentUser } = useMasterRouterContext().currentUserHandler;
    const [photoError, setPhotoError] = useState<string | null>(null);
    const changePhoto = (file: string): void => {
        updatePhoto(getB64Value(file));
    };
    const changeErrorPhoto = (error: string | null): void => {
        setPhotoError(error);
    };
    const deletePhoto = (): void => {
        updatePhoto(null);
    };
    const updatePhotoInCurrentUser = (urlPhoto: string | null): void => {
        const newCurrentUser: SessionUser = {
            ...currentUserLocalStorage.get(),
            urlPhoto
        };
        fillCurrentUser(newCurrentUser);
        currentUserLocalStorage.set(newCurrentUser);
    }
    const updatePhoto = async (photoInB64: string | null): Promise<void> => {
        if (!currentCollaborator) return;
        preloader.show(
            photoInB64 
            ? "Actualizando foto..."
            : "Eliminando foto..."
        )
        const { data: urlPhoto } = await requestUpdatePhoto({
            collaboratorId: currentCollaborator?.id,
            photoInBase64: photoInB64,
        });
        preloader.hide();
        fillCurrentCollaboratorUrlPhoto(urlPhoto);
        updatePhotoInCurrentUser(urlPhoto);
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
                        b64: null,
                        url: currentCollaborator.urlPhoto
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