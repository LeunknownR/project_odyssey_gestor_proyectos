import ActionButtons from "./components/ActionButtons/ActionButtons";
import { Container, TaskName } from "./styles";
import { HeaderProps } from "./types";

const Header = ({ name }: HeaderProps) => {
    return (
        <Container justify="space-between" align="center">
            <TaskName>{name}</TaskName>
            <ActionButtons />
        </Container>
    );
};

export default Header;
