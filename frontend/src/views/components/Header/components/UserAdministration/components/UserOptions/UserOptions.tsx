import {
    Container,
    UserInfo,
    FullName,
} from "./styles";
import Footer from "./components/Footer/Footer";
import UserImage from "../../../../../UserImage/UserImage";
import { UserOptionsProps } from "./types";
import RolInfo from "./components/RolInfo/RolInfo";
import { FlexFlow } from "src/components/styles";

const UserOptions = ({ 
    currentUser,
    areOpen, 
    closeOptions
}: UserOptionsProps) => {
    if (!currentUser) return null;
    const { name, surname, role, urlPhoto } = currentUser;
    return (
        <Container className={areOpen ? "open" : ""}>
            <FlexFlow direction="column" gap="8px">
                <UserInfo align="center" gap="12px">
                    <UserImage 
                        className="big" 
                        name={name} surname={surname} 
                        urlPhoto={urlPhoto} />
                    <FullName>{name} {surname}</FullName>
                </UserInfo>
                <RolInfo role={role}/>
            </FlexFlow>
            <Footer closeOptions={closeOptions}/>
        </Container>
    );
};

export default UserOptions;
