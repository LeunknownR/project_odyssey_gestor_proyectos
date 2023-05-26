export type UserImageProps = {
    nameInitialsClassName?: string;
    clickable?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    name: string;
    surname: string;
    userPhoto: string | null;
}
export type NameInitialsProps = {
    className?: string;
    name: string; 
    surname: string;
};