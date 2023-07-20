export type CollaboratorPreviewProps = {
    name: string;
    surname: string;
    urlPhoto: string | null;
    email: string;
    onClick: () => void;
    active: boolean;
};
