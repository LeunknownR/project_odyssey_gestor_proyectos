import BackendImage from "./components/BackendImage/BackendImage";
import NameInitials from "./components/NameInitials/NameInitials";
import { Container } from "./styles";
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
                ? <BackendImage className={className} path={urlPhoto}/>
                : <NameInitials 
                    name={name} 
                    surname={surname} 
                    className={className}/>} 
        </Container>
    );
};

export default UserImage;
