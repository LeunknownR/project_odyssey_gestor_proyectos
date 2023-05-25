import { Container, NameInitials, UserPhoto } from "./styles";
import { UserImageProps } from "./types";

const UserImage = ({ clickable, onClick, name, surname, userPhoto }: UserImageProps) => {
    return (
        <Container className={clickable && "clickable"} onMouseDown={onClick}>
            {userPhoto 
                ? <UserPhoto src={userPhoto} />
                : <NameInitials className={!clickable && "bigger"} >
                    {name[0]}{surname[0]}
                </NameInitials>
            }
        </Container>
    );
};

export default UserImage;
