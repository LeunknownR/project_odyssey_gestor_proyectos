export type UserImageProps = {
    className?: string;
    clickable?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    name: string;
    surname: string;
    urlPhoto: string | null;
}
export type NameInitialsProps = {
    className?: string;
    name: string; 
    surname: string;
};
export type BackendImageProps = {
    className?: string;
    path: string;
}