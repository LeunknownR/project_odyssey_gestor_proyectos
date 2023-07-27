import CustomButton from "src/components/CustomButton/CustomButton";
import { PasswordTextField } from "../../styles";
import { BUTTON_PROPS, TEXT_FIELD_PROPS } from "../../utils/constants";
import NotificationInfo from "../NotificationInfo";
import { ActualPasswordWrapper } from "./styles";
import { FirstPartModalProps } from "./types";

const FirstPartModal = ({
    verifyPassword,
    actualPassword,
    handlePasswords,
    passwordFieldDisable,
    passwordFieldError,
}: FirstPartModalProps) => {
    return (
        <>
            <NotificationInfo />
            <ActualPasswordWrapper>
                <PasswordTextField
                    {...TEXT_FIELD_PROPS.ACTUAL_PASS}
                    value={actualPassword}
                    onChange={handlePasswords}
                    disabled={passwordFieldDisable.actualPassword}
                    error={passwordFieldError}
                />
                <CustomButton
                    {...BUTTON_PROPS.VERIFY_PASS}
                    onClick={verifyPassword}
                    disabled={!actualPassword || passwordFieldDisable.verifyButton}
                />
            </ActualPasswordWrapper>
        </>
    );
};

export default FirstPartModal;