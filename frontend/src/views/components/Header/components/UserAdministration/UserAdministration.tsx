import { useState, useEffect, useRef } from "react";
import UserImage from "../../../UserImage/UserImage";
import UserOptions from "./components/UserOptions/UserOptions";
import { Container } from "./styles";
import { currentUserLocalStorage } from "src/storage/user.local";
import { User } from "src/entities/user/types";
import { UserAdministrationProps } from "./types";

const UserAdministration = ({
    isInSidebar = false,
}: UserAdministrationProps) => {
    const [areOptionsOpen, setAreOptionsOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const $optionsRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const currentUser = currentUserLocalStorage.get();
        setCurrentUser(currentUser);
    }, []);
    const toggleOptions = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setAreOptionsOpen(prev => !prev);
    };
    return (
        <Container
            tabIndex={0}
            onBlur={() => setAreOptionsOpen(false)}
            onFocus={() => setAreOptionsOpen(true)}
            className={isInSidebar ? "in-sidebar" : ""}
        >
            {currentUser && (
                <UserImage
                    onClick={toggleOptions}
                    name={currentUser.name}
                    surname={currentUser.surname}
                    urlPhoto={currentUser.urlPhoto}
                    clickable
                />
            )}
            <UserOptions
                isOpen={areOptionsOpen}
                currentUser={currentUser}
                ref={$optionsRef}
            />
        </Container>
    );
};

export default UserAdministration;
