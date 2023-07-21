import useModal from "src/components/Modal/utils/hooks/useModal";
import ProfileConfigurationModal from "./components/ProfileConfigurationModal";
import ChangePasswordModal from "./components/ChangePasswordModal";
import { CollaboratorProfileModalsProps } from "./types";

const CollaboratorProfileModals = ({
    profileConfigModal,
}: CollaboratorProfileModalsProps) => {
    const profileConfigurationModal = useModal();
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
        </>
    );
};

export default CollaboratorProfileModals;
