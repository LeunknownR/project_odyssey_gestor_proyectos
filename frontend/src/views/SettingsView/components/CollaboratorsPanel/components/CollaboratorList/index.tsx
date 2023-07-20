import CollaboratorPreview from "./CollaboratorPreview";
import { Container, List } from "./styles";
import { CollaboratorListProps } from "./types";

const CollaboratorList = ({ collaboratorList }: CollaboratorListProps) => {
    return (
        <Container>
            <List direction="column" gap="6px" className="custom-scrollbar">
                {collaboratorList.map(
                    ({ id, name, surname, email, urlPhoto }) => (
                        <CollaboratorPreview
                            key={id}
                            name={name}
                            surname={surname}
                            urlPhoto={urlPhoto}
                            email={email}
                            active={false}
                            onClick={() => console.log("hola")}
                        />
                    )
                )}
            </List>
        </Container>
    );
};

export default CollaboratorList;
