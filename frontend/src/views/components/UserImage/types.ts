export type UserImageProps = {
    className?: string;
    clickable?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    name: string;
    surname: string;
    urlPhoto: string | null;
    size?: string;
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