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
    UserDataContainer,
    ChangePasswordButton,
    CloseBtn,
} from "./styles";
import { FlexFlow } from "src/components/styles";
import DataLabel from "./components/DataLabel";

const MODAL_STYLES = {
    padding: "20px 30px",
};

const ProfileConfigurationModal = ({
    modalProps,
    openChangePasswordModal,
}: ProfileConfigurationModalProps) => {
    return (
        <CustomModal {...modalProps} sizeProps={MODAL_STYLES}>
            <Modalheader justify="space-between">
                <TitleModal>Configuración de perfil</TitleModal>
                <CloseBtn
                    icon="material-symbols:close"
                    onClick={() => modalProps.open(false)}
                />
            </Modalheader>
            <UserContainer justify="center" gap="70px">
                <PhotoUploader
                    name={FAKE_DATA.name}
                    surname={FAKE_DATA.surname}
                    urlPhoto={FAKE_DATA.urlPhoto}
                />
                <UserDataContainer direction="column">
                    <FlexFlow gap="20px">
                        <DataLabel label="Nombres" data={FAKE_DATA.name}/>
                        <DataLabel label="Apellidos" data={FAKE_DATA.surname} />
                    </FlexFlow>
                    <DataLabel label="Usuario" data={FAKE_DATA.username} />
                    <DataLabel label="Correo" data={FAKE_DATA.email} />
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
