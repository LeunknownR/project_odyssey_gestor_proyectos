import { Container, DeleteButton, TaskName } from "./styles";
import { HeaderProps } from "./types";

const Header = ({ name }: HeaderProps) => {
    return (
        <Container justify="space-between" align="center" gap="15px">
            <TaskName>{name}</TaskName>
            <DeleteButton icon="ion:skull" onClick={() => console.log("GNOMO BORRAR")}/>
        </Container>
    );
};

export default Header;
