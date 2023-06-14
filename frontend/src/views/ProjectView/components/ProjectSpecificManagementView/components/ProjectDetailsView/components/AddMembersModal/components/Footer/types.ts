export type FooterProps = {
    closeModal: () => void;
    addMembersToProject: () => Promise<void>;
    noProjectMembers: boolean;
}