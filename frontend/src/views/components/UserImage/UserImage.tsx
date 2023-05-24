/* eslint-disable no-constant-condition */
import { useState, useEffect } from "react";
import { Container, NameInitials, UserPhoto } from "./styles";
import { UserImageProps } from "./types";
import { currentUserLocalStorage } from "src/storage/user.local";

const UserImage = ({ isClickable, onClick }: UserImageProps) => {
    const [nameInitials, setNameInitials] = useState("XX");
    useEffect(() => {
        const { name, surname } = currentUserLocalStorage.get();
        setNameInitials(name[0] + surname[0]);
    }, []);
    return (
        <Container className={isClickable && "clickable"} onMouseDown={onClick}>
            {true ? <NameInitials>{nameInitials}</NameInitials> : <UserPhoto />}
        </Container>
    );
};

export default UserImage;
