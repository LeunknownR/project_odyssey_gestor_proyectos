/* eslint-disable no-constant-condition */
import {
    Container,
    IconContainer,
    Rol,
    RolInfo,
    UserInfo,
    Username,
} from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "./components/Footer/Footer";
import UserImage from "../../../../../UserImage/UserImage";
import { Column } from "src/components/styles";
import { UserOptionsProps } from "./types";
import { forwardRef } from "react";
import { currentUserLocalStorage } from "src/storage/user.local";

const UserOptions = forwardRef(({ isOpen }: UserOptionsProps, ref) => {
    const currentUser = currentUserLocalStorage.get();
    return (
        <Container className={isOpen && "open"} ref={ref}>
            <Column gap="8px">
                <UserInfo align="center" gap="12px">
                    <UserImage />
                    <Username>{currentUser.name} {currentUser.surname}</Username>
                </UserInfo>
                <RolInfo align="center" gap="6px" alignSelf="flex-end">
                    <IconContainer>
                        <Icon icon="icon-park-outline:id-card-h" />
                    </IconContainer>
                    <Rol>Admin. General</Rol>
                </RolInfo>
            </Column>
            <Footer />
        </Container>
    );
});

export default UserOptions;
