/* eslint-disable no-constant-condition */
import { Container, NameInitials, UserPhoto } from "./styles";
import { UserImageProps } from "./types";

const UserImage = ({ isClickable, onClick }: UserImageProps) => {
    return (
        <Container className={isClickable && "clickable"} onMouseDown={onClick}>
            {true ? <NameInitials>DC</NameInitials> : <UserPhoto />}
        </Container>
    );
};

export default UserImage;
