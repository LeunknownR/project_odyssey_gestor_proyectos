import { ChangePasswordModalProps } from "./types";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
    ContentRequirements,
    CustomModal,
    IndividualRequirement,
    Modalheader,
    NotificationContainer,
    NewPasswordConfirmationContainer,
    PasswordConfirmationContainer,
    TitleModal,
} from "./styles";
import CustomTextField from "src/components/CustomTextField/CustomTextField";
import CustomButton from "src/components/CustomButton/CustomButton";

const MODAL_STYLES = {
    padding: "20px 30px",
};

const ChangePasswordModal = ({
    modalProps,
    title,
    description,
    children,
}: ChangePasswordModalProps) => {
    return (
        <CustomModal {...modalProps} sizeProps={MODAL_STYLES}>
            <Modalheader>
                <TitleModal>Configuración de perfil</TitleModal>
                <Icon
                    icon="material-symbols:close"
                    onClick={() => modalProps.open(false)}
                />
            </Modalheader>
            <NotificationContainer>
                <Icon icon="ic:baseline-info" />
                Para cambiar tu contraseña es necesario que ingreses tu actual
                credencial primero.
            </NotificationContainer>
            <PasswordConfirmationContainer>
                <CustomTextField
                    label="Contraseña actual"
                    type="password"
                    name="password"
                    variant="login"
                />
                <CustomButton
                    content="Verificar"
                    size="normal"
                    alignSelf="flex-end"
                    variant="main"
                    onClick={() => console.log("dx")}
                />
            </PasswordConfirmationContainer>
            <NewPasswordConfirmationContainer>
                <CustomTextField
                    label="Nueva contraseña"
                    type="password"
                    name="password"
                    variant="login"
                />
                <ContentRequirements>
                    <IndividualRequirement>
                        <Icon icon="emojione-monotone:shield" />
                        Mínimo ocho caracteres
                    </IndividualRequirement>
                    <IndividualRequirement>
                        <Icon icon="emojione-monotone:shield" />
                        Al menos un número
                    </IndividualRequirement>
                    <IndividualRequirement>
                        <Icon icon="emojione-monotone:shield" />
                        Al menos una minúscula
                    </IndividualRequirement>
                    <IndividualRequirement>
                        <Icon icon="emojione-monotone:shield" />
                        Al menos una mayúscula
                    </IndividualRequirement>
                </ContentRequirements>
            </NewPasswordConfirmationContainer>
            <NewPasswordConfirmationContainer>
                <CustomTextField
                    label="Confirmar contraseña"
                    type="password"
                    name="password"
                    variant="login"
                />
            </NewPasswordConfirmationContainer>
            <CustomButton
                content="Actualizar"
                size="big"
                alignSelf="flex-end"
                variant="main"
                onClick={() => console.log("dx")}
            />
        </CustomModal>
    );
};

export default ChangePasswordModal;
