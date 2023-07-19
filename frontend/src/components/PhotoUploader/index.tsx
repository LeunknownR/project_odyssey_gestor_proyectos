import {
    CollaboratorImage,
    Container,
    DeleteImageBtn,
    UploadBtn,
} from "./styles";
import { PhotoUploaderProps } from "./types";

const PhotoUploader = ({ name, surname, urlPhoto }: PhotoUploaderProps) => {
    return (
        <Container direction="column" align="center" gap="19px">
            <DeleteImageBtn
                onClick={() => console.log("hola")}
                icon="material-symbols:delete"
            />
            <CollaboratorImage
                name={name}
                surname={surname}
                urlPhoto={urlPhoto}
            />
            <UploadBtn
                onClick={() => console.log("GNOMO FOTO")}
                icon="material-symbols:add-a-photo"
                content="Subir foto"
            />
        </Container>
    );
};

export default PhotoUploader;
