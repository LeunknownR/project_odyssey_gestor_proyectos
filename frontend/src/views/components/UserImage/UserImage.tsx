import NameInitials from "./NameInitials/NameInitials";
import { Container, UserPhoto } from "./styles";
import { UserImageProps } from "./types";

const UserImage = ({ 
    clickable, 
    className,
    onClick, 
    name, surname, 
    urlPhoto 
}: UserImageProps) => {
    return (
        <Container 
            className={clickable ? "clickable" : ""} 
            onMouseDown={onClick}>
            {urlPhoto 
                ? <UserPhoto 
                    className={className}
                    src={`http://localhost:3006/images${urlPhoto}`} />
                : <NameInitials 
                    name={name} 
                    surname={surname} 
                    className={className}/>} 
        </Container>
    );
};

export default UserImage;
