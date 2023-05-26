/* eslint-disable no-constant-condition */
import {
    Container,
    UserInfo,
    Username,
} from "./styles";
import Footer from "./components/Footer/Footer";
import UserImage from "../../../../../UserImage/UserImage";
import { Column } from "src/components/styles";
import { UserOptionsProps } from "./types";
import { forwardRef } from "react";
import RolInfo from "./components/RolInfo/RolInfo";

const UserOptions = forwardRef(({ isOpen, currentUser }: UserOptionsProps, ref) => {
    if (!currentUser) return null;
    const { name, surname, role, urlPhoto } = currentUser;
    return (
        <Container className={isOpen && "open"} ref={ref}>
            <Column gap="8px">
                <UserInfo align="center" gap="12px">
                    <UserImage nameInitialsClassName="big" name={name} surname={surname} userPhoto={null} />
                    <Username>{name} {surname}</Username>
                </UserInfo>
                <RolInfo role={role}/>
            </Column>
            <Footer />
        </Container>
    );
});

export default UserOptions;
