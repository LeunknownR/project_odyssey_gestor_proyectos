export type UserImageProps = {
    clickable?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    name: string;
    surname: string;
    userPhoto: string | null;
}