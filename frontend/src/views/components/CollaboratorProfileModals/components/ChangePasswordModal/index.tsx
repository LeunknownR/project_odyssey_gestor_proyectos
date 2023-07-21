import { ChangePasswordModalProps } from "./types";
import {
    CustomModal,
    Modalheader,
    NewPasswordWrapper,
    ActualPassWrapper,
    TitleModal,
    PasswordTextField,
    UpdateButton,
} from "./styles";
import CustomButton from "src/components/CustomButton/CustomButton";
import { CloseBtn } from "../ProfileConfigurationModal/styles";
import { TEXT_FIELD_PROPS } from "./utils/constants";
import NotificationInfo from "./components/NotificationInfo";
import ContentRequirements from "./components/ContentRequirements";
import { FlexFlow } from "src/components/styles";

const MODAL_STYLES = {
    padding: "20px 30px",
};

const ChangePasswordModal = ({ modalProps }: ChangePasswordModalProps) => {
    return (
        <CustomModal {...modalProps} sizeProps={MODAL_STYLES}>
            <Modalheader justify="space-between">
                <TitleModal>Cambiar contraseña</TitleModal>
                <CloseBtn
                    icon="material-symbols:close"
                    onClick={() => modalProps.open(false)}
                />
            </Modalheader>
            <NotificationInfo />
            <FlexFlow direction="column" gap="25px">
                <ActualPassWrapper>
                    <PasswordTextField {...TEXT_FIELD_PROPS.ACTUAL_PASS} />
                    <CustomButton
                        content="Verificar"
                        size="normal"
                        alignSelf="flex-end"
                        icon="mdi:password-check"
                        variant="main"
                        onClick={() => console.log("dx")}
                    />
                </ActualPassWrapper>
                <NewPasswordWrapper>
                    <PasswordTextField {...TEXT_FIELD_PROPS.NEW_PASS} />
                    <ContentRequirements />
                </NewPasswordWrapper>
                <PasswordTextField {...TEXT_FIELD_PROPS.CONFIRM_PASS} />
            </FlexFlow>
            <UpdateButton
                content="Actualizar"
                alignSelf="flex-end"
                variant="main"
                onClick={() => console.log("dx")}
            />
        </CustomModal>
    );
};

export default ChangePasswordModal;
