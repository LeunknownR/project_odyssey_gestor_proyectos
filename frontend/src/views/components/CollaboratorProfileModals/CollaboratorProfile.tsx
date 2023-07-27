import { useState, useEffect } from "react";
import useModal from "src/components/Modal/utils/hooks/useModal";
import ProfileConfigurationModal from "./components/ProfileConfigurationModal";
import ChangePasswordModal from "./components/ChangePasswordModal";
import { CollaboratorProfileModalsProps } from "./types";
import { SessionUser } from "src/entities/user/types";
import { currentUserLocalStorage } from "src/storage/user.local";

const CollaboratorProfileModals = ({
    profileConfigModal,
}: CollaboratorProfileModalsProps) => {
    // const [currentCollaborator, setCurrentCollaborator] = useState<User | null>(null);
    const [currentCollaborator, setCurrentCollaborator] = useState<SessionUser | null>(null);
    const changePasswordModal = useModal();
    useEffect(() => {
        const currentUser: SessionUser = currentUserLocalStorage.get();
        setCurrentCollaborator(currentUser);
    }, []);
    const openChangePasswordModal = (): void => {
        changePasswordModal.open(true);
        profileConfigModal.open(false);
    };
    const fillCurrentCollaboratorUrlPhoto = (urlPhoto: string | null): void => {
        setCurrentCollaborator(prev => prev && {
            ...prev,
            urlPhoto
        });
    }
    return (
        <>
        <ProfileConfigurationModal
            modalProps={profileConfigModal}
            openChangePasswordModal={openChangePasswordModal}
            currentCollaborator={currentCollaborator}
            fillCurrentCollaboratorUrlPhoto={fillCurrentCollaboratorUrlPhoto}
        />
        <ChangePasswordModal
            modalProps={changePasswordModal}
            currentCollaborator={currentCollaborator}
        />
        </>
    );
};

export default CollaboratorProfileModals;
