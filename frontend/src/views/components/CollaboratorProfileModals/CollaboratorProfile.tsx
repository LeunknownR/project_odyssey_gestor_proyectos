import { useState, useEffect } from "react";
import useModal from "src/components/Modal/utils/hooks/useModal";
import ProfileConfigurationModal from "./components/ProfileConfigurationModal";
import ChangePasswordModal from "./components/ChangePasswordModal";
import { CollaboratorProfileModalsProps } from "./types";
import ConfirmationChangePasswordModal from "./components/ConfirmationChangePasswordModal";
import SuccessfulPasswordChangeModal from "./components/SuccessfulPasswordChangeModal";
import NoChangePasswordModal from "./components/NoChangePasswordModal";
import { SessionUser, User } from "src/entities/user/types";
import { currentUserLocalStorage } from "src/storage/user.local";

const CollaboratorProfileModals = ({
    profileConfigModal,
}: CollaboratorProfileModalsProps) => {
    const [currentCollaborator, setCurrentCollaborator] = useState<User | null>(null);
    const profileConfigurationModal = useModal();
    const ConfirmationChangePassModal = useModal();
    const SuccessfulPassChangeModal = useModal();
    const NoChangePassModal = useModal();
    const openChangePasswordModal = (): void => {
        profileConfigurationModal.open(true);
        profileConfigModal.open(false);
    };
    useEffect(() => {
        const currentUser: SessionUser = currentUserLocalStorage.get();
        setCurrentCollaborator(currentUser)
    }, []);
    return (
        <>
        <ProfileConfigurationModal
            modalProps={profileConfigModal}
            openChangePasswordModal={openChangePasswordModal}
            currentCollaborator={currentCollaborator}/>
        <ChangePasswordModal 
            modalProps={profileConfigurationModal} 
            currentCollaborator={currentCollaborator} />
        <ConfirmationChangePasswordModal modalProps={ConfirmationChangePassModal}/>
        <NoChangePasswordModal modalProps={NoChangePassModal}/>
        <SuccessfulPasswordChangeModal modalProps={SuccessfulPassChangeModal}/> 
        </>
    );
};

export default CollaboratorProfileModals;
