import UserImage from "src/views/components/UserImage/UserImage";
import { CollaboratorName, Container, Email } from "./styles";
import { FlexFlow } from "src/components/styles";
import { CollaboratorPreviewProps } from "./types";

const CollaboratorPreview = ({
    name,
    surname,
    urlPhoto,
    email,
    onClick,
    active,
}: CollaboratorPreviewProps) => {
    return (
        <Container
            align="center"
            gap="12px"
            onClick={onClick}
            className={active ? "active" : ""}
        >
            <UserImage name={name} surname={surname} urlPhoto={urlPhoto} className="medium" />
            <FlexFlow direction="column" gap="4px" width="100%">
                <CollaboratorName title={`${name} ${surname}`}>
                    {name} {surname}
                </CollaboratorName>
                {email && <Email title={email}>{email}</Email>}
            </FlexFlow>
        </Container>
    );
};

export default CollaboratorPreview;
