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

const UserOptions = forwardRef(({ isOpen }: UserOptionsProps, ref) => {
    return (
        <Container className={isOpen && "open"} ref={ref}>
            <Column gap="8px">
                <UserInfo align="center" gap="12px">
                    <UserImage />
                    <Username>Diego Edgardo Torres de la Cruz</Username>
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
