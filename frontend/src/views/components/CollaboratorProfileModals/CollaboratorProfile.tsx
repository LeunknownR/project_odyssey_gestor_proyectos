import useModal from "src/components/Modal/utils/hooks/useModal";
import ProfileConfigurationModal from "./components/ProfileConfigurationModal";
import ChangePasswordModal from "./components/ChangePasswordModal";

const CollaboratorProfileModals = ({ modalProps }) => {
    const profileConfigurationModal = useModal();
    const openChangePasswordModal = (): void => {
        profileConfigurationModal.open(true);
    }
    return (
        <> 
            <ProfileConfigurationModal modalProps={modalProps} title={""} description={undefined} children={undefined}/>
            <ChangePasswordModal modalProps={profileConfigurationModal} title={""} description={undefined} children={undefined}/>
        </>
    );
};

export default CollaboratorProfileModals;