import { ProfileConfigurationModalProps } from "./types";
import { Icon } from "@iconify/react/dist/iconify.js";
import PhotoUploader from "src/components/PhotoUploader";
import { FAKE_DATA } from "../../mock";
import {
    CustomModal,
    UserContainer,
    UserDataContainer,
    ChangePasswordButton,
    NamesContent,
} from "./styles";
import { FlexFlow } from "src/components/styles";
import DataLabel from "./components/DataLabel";
import ModalHeader from "./components/ModalHeader";

const MODAL_STYLES = {
    padding: "20px 30px",
};

const ProfileConfigurationModal = ({
    modalProps,
    openChangePasswordModal,
}: ProfileConfigurationModalProps) => {
    return (
        <CustomModal {...modalProps} sizeProps={MODAL_STYLES}>
            <ModalHeader modalProps={modalProps}/>
            <UserContainer justify="center" gap="70px">
                <PhotoUploader
                    name={FAKE_DATA.name}
                    surname={FAKE_DATA.surname}
                    urlPhoto={FAKE_DATA.urlPhoto}
                />
                <UserDataContainer direction="column">
                    <NamesContent>
                        <DataLabel label="Nombres" data={FAKE_DATA.name}/>
                        <DataLabel label="Apellidos" data={FAKE_DATA.surname} />
                    </NamesContent>
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
