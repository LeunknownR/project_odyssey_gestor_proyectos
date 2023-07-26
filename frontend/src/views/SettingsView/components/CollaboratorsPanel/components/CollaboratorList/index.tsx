import useSettingsViewContext from "src/views/SettingsView/utils/context/useSettingsViewContext";
import CollaboratorPreview from "./CollaboratorPreview";
import { Container, List } from "./styles";
import NoCollaborators from "./CollaboratorPreview/components/NoCollaborators";

const CollaboratorList = () => {
    const {
        collaboratorsHandler,
        currentCollaborator,
        setCurrentCollaborator,
        showForm,
    } = useSettingsViewContext();
    return (
        <Container>
            {collaboratorsHandler.value.length > 0 ?
                <List direction="column" gap="6px" className="custom-scrollbar">
                    {collaboratorsHandler.value.map((collaborator) => (
                        <CollaboratorPreview
                            key={collaborator.id}
                            name={collaborator.name}
                            surname={collaborator.surname}
                            urlPhoto={collaborator.urlPhoto}
                            email={collaborator.email}
                            selected={
                                collaborator.id === currentCollaborator?.id
                            }
                            onClick={() => {
                                setCurrentCollaborator(collaborator);
                                showForm();
                            }}
                        />
                    ))}
                </List>: <NoCollaborators />}
        </Container>
    );
};

export default CollaboratorList;
