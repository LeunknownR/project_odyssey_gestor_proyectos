import NameInitials from "./NameInitials/NameInitials";
import { Container, UserPhoto } from "./styles";
import { UserImageProps } from "./types";

const UserImage = ({ 
    clickable, 
    nameInitialsClassName,
    onClick, 
    name, surname, 
    userPhoto 
}: UserImageProps) => {
    return (
        <Container className={clickable ? "clickable" : ""} onMouseDown={onClick}>
            {userPhoto 
                ? <UserPhoto src={userPhoto} />
                : <NameInitials 
                    name={name} 
                    surname={surname} 
                    className={nameInitialsClassName}/>} 
        </Container>
    );
};

export default UserImage;
