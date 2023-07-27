import { ReactNode } from "react";
import BackendImage from "./components/BackendImage/BackendImage";
import NameInitials from "./components/NameInitials/NameInitials";
import { Container, Image } from "./styles";
import { UserImageProps } from "./types";

const UserImage = ({
    clickable,
    className,
    onClick,
    name, surname,
    urlPhoto, b64
}: UserImageProps) => {
    const renderImage = (): ReactNode => {
        if (b64)
            return <Image className={className} src={b64} onClick={onClick} />;
        if (urlPhoto)
            return <BackendImage className={className} path={urlPhoto} />;
        return (
            <NameInitials name={name} surname={surname} className={className} />
        );
    };
    return (
        <Container
            className={clickable ? "clickable" : ""}
            onMouseDown={onClick}>
            {renderImage()}
        </Container>
    );
};

export default UserImage;
