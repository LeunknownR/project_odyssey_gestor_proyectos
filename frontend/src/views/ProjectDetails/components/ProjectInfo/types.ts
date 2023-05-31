export type ProjectInfoProps = {
    name: string;
    description: string;
    period: string;
    state: string;
    openUpdateDateModal: () => void;
    currentUserIsProjectLeader: boolean;
}