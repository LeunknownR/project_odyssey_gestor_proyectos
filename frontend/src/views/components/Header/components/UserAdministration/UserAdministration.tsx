import { useState } from "react";
import UserImage from "../../../UserImage/UserImage";
import UserOptions from "./components/UserOptions/UserOptions";
import { Container } from "./styles";
import { UserAdministrationProps } from "./types";
import useMasterRouterContext from "src/routes/utils/context/useMasterRouterContext";

const UserAdministration = ({
    isInSidebar = false,
}: UserAdministrationProps) => {
    const { currentUser } = useMasterRouterContext().currentUserHandler;
    const [areUserOptionsOpen, setUserOptionsOpen] = useState(false);
    const toggleUserOptionsOpen = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setUserOptionsOpen(prev => !prev);
    };
    return (
        <Container
            tabIndex={0}
            onBlur={() => setUserOptionsOpen(false)}
            onFocus={() => setUserOptionsOpen(true)}
            className={isInSidebar ? "in-sidebar" : ""}>
            {currentUser && (
                <UserImage
                    onClick={toggleUserOptionsOpen}
                    name={currentUser.name}
                    surname={currentUser.surname}
                    urlPhoto={currentUser.urlPhoto}
                    clickable
                />
            )}
            <UserOptions
                areOpen={areUserOptionsOpen}
                closeOptions={() => setUserOptionsOpen(false)}
                currentUser={currentUser}
            />
        </Container>
    );
};

export default UserAdministration;
