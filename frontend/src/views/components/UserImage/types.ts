export type UserImageProps = {
    className?: string;
    clickable?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    name: string;
    surname: string;
    urlPhoto: string | null;
    b64?: string | null;
}
export type NameInitialsProps = {
    className?: string;
    name: string; 
    surname: string;
};
export type BackendImageProps = {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLImageElement>;
    path: string;
    isDynamic?: boolean;
}