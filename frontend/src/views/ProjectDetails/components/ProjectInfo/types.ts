export type ProjectInfoProps = {
    name: string;
    description: string;
    period: string;
    openUpdateDateModal: () => void;
    currentUserIsProjectLeader: boolean;
}