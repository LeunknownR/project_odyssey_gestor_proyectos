import { ProfileConfigurationModalProps } from "./types";
import { Icon } from "@iconify/react/dist/iconify.js";
import PhotoUploader from "src/components/PhotoUploader";
import { FAKE_DATA } from "../../mock";
import {
    CustomModal,
    Modalheader,
    TitleModal,
    UserContainer,
    UserData,
    UserDataSubtitle,
    UserDataModal,
    ProfileChangeConfigurationButton,
    UserDataContainer,
} from "./styles";
import ChangePasswordModal from "../ChangePasswordModal";

const MODAL_STYLES = {
    padding: "20px 30px",
};

const ProfileConfigurationModal = ({
    modalProps,
    title,
    description,
    children,
}: ProfileConfigurationModalProps) => {
    return (
        <CustomModal {...modalProps} sizeProps={MODAL_STYLES}>
            <Modalheader>
                <TitleModal>Configuración de perfil</TitleModal>
                <Icon
                    icon="material-symbols:close"
                    onClick={() => modalProps.open(false)}
                />
            </Modalheader>
            <UserContainer>
                <PhotoUploader
                    name={FAKE_DATA.name}
                    surname={FAKE_DATA.surname}
                    urlPhoto={FAKE_DATA.urlPhoto}
                />
                <UserDataContainer>
                    <UserData>
                        <UserDataSubtitle>Nombres</UserDataSubtitle>
                        <UserDataModal>{FAKE_DATA.name}</UserDataModal>
                    </UserData>
                    <UserData>
                        <UserDataSubtitle>Apellidos</UserDataSubtitle>
                        <UserDataModal>{FAKE_DATA.surname}</UserDataModal>
                    </UserData>
                    <UserData>
                        <UserDataSubtitle>Usuario</UserDataSubtitle>
                        <UserDataModal>{FAKE_DATA.username}</UserDataModal>
                    </UserData>
                    <UserData>
                        <UserDataSubtitle>Correo</UserDataSubtitle>
                        <UserDataModal>{FAKE_DATA.email}</UserDataModal>
                    </UserData>
                    <ProfileChangeConfigurationButton>
                        Cambiar contraseña
                        <Icon icon="bxs:edit" />
                    </ProfileChangeConfigurationButton>
                </UserDataContainer>
            </UserContainer>
        </CustomModal>
    );
};

export default ProfileConfigurationModal;
