import useModal from "src/components/Modal/utils/hooks/useModal";
import ProfileConfigurationModal from "./components/ProfileConfigurationModal";
import ChangePasswordModal from "./components/ChangePasswordModal";
import { CollaboratorProfileModalsProps } from "./types";
import ConfirmationChangePasswordModal from "./components/ConfirmationChangePasswordModal";
import SuccessfulPasswordChangeModal from "./components/SuccessfulPasswordChangeModal";
import NoChangePasswordModal from "./components/NoChangePasswordModal";

const CollaboratorProfileModals = ({
    profileConfigModal,
}: CollaboratorProfileModalsProps) => {
    const profileConfigurationModal = useModal();
    const ConfirmationChangePassModal = useModal(true);
    const SuccessfulPassChangeModal = useModal(true);
    const NoChangePassModal = useModal(true);
    const openChangePasswordModal = (): void => {
        profileConfigurationModal.open(true);
        profileConfigModal.open(false);
    };
    return (
        <>
        <ProfileConfigurationModal
            modalProps={profileConfigModal}
            openChangePasswordModal={openChangePasswordModal}
        />
        <ChangePasswordModal modalProps={profileConfigurationModal} />
        <ConfirmationChangePasswordModal modalProps={ConfirmationChangePassModal}/>
        <NoChangePasswordModal modalProps={NoChangePassModal}/>
        <SuccessfulPasswordChangeModal modalProps={SuccessfulPassChangeModal}/> 
        </>
    );
};

export default CollaboratorProfileModals;
