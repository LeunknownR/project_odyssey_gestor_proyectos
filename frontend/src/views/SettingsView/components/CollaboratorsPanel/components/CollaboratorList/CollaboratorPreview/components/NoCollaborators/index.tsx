import NoContent from "src/views/components/NoContent/NoContent";
import { Container } from "./styles";
import noChats from "src/images/no-chats.png"

const NoCollaborators = () => {
    return (
        <Container>
            <NoContent
                img={noChats}
                title="No se encontraron colaboradores"
                subtitle="Lo sentimos, no hay resultados para tu búsqueda."
                titleColor="var(--white-1)"
            />
        </Container>
    );
};

export default NoCollaborators;
