import { useState } from "react";
import { ChangePasswordModalProps, FirstPartModalProps } from "./types";
import {
    CustomModal,
    NewPasswordWrapper,
    ActualPasswordWrapper,
    PasswordTextField,
    UpdateButton,
} from "./styles";
import CustomButton from "src/components/CustomButton/CustomButton";
import { BUTTON_PROPS, TEXT_FIELD_PROPS } from "./utils/constants";
import NotificationInfo from "./components/NotificationInfo";
import ContentRequirements from "./components/ContentRequirements";
import ModalHeader from "./components/ModalHeader";
import useMainContext from "src/utils/contexts/main-context/useMainContext";

const MODAL_STYLES = {
    padding: "20px 30px",
};

const ChangePasswordModal = ({ modalProps }: ChangePasswordModalProps) => {
    const [tabIdx, setTabIdx] = useState(0);
    const { isMobile } = useMainContext();
    const moveTab = (idx: number) => setTabIdx(idx);
    const verifyPassword = () => {
        moveTab(1);
    };
    const tabs = [
        <FirstPartModal verifyPassword={verifyPassword} />,
        <SecondPartModal />,
    ];
    return (
        <CustomModal {...modalProps} sizeProps={MODAL_STYLES}>
            <ModalHeader modalProps={modalProps} />
            {isMobile ? tabs[tabIdx] || tabs[0] : tabs}
        </CustomModal>
    );
};

export default ChangePasswordModal;

const FirstPartModal = ({verifyPassword}: FirstPartModalProps) => {
    return (
        <>
        <NotificationInfo />
        <ActualPasswordWrapper>
            <PasswordTextField {...TEXT_FIELD_PROPS.ACTUAL_PASS} />
            <CustomButton
                {...BUTTON_PROPS.VERIFY_PASS}
                onClick={verifyPassword}
            />
        </ActualPasswordWrapper>
        </>
    );
};

const SecondPartModal = () => {
    return (
        <>
        <NewPasswordWrapper>
            <PasswordTextField {...TEXT_FIELD_PROPS.NEW_PASS} />
            <ContentRequirements />
        </NewPasswordWrapper>
        <PasswordTextField {...TEXT_FIELD_PROPS.CONFIRM_PASS} />
        <UpdateButton
            {...BUTTON_PROPS.UPDATE_PASS}
            onClick={() => console.log("dx")}
        />
        </>
    );
};