import { useRef, useEffect } from "react";
import {
    CollaboratorImage,
    Container,
    DeleteImageBtn,
    UploadBtn,
} from "./styles";
import { PhotoUploaderProps } from "./types";
import { fileToBase64 } from "src/utils/fileToBase64";
import { ACCEPTED_FORMATS, MAX_BYTES_SIZE, MAX_MB_SIZE } from "./utils/constants";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const PhotoUploader = ({
    name,
    surname,
    data: { b64, url },
    changePhoto,
    error,
    changeError,
    deletePhoto,
}: PhotoUploaderProps) => {
    const $input = useRef<HTMLInputElement>(null);
    //#region Effects
    useEffect(() => {
        checkClearingWhenNotExistsB64();
    }, [b64]);
    //#endregion
    const checkClearingWhenNotExistsB64 = () => {
        if (b64) return;
        if (!$input.current) return;
        $input.current.value = "";
    }
    const openInputFile = () => {
        $input.current && $input.current.click();
    };
    const selectFiles = () => {
        if (!$input.current || !$input.current.files) return;
        const [newFile] = $input.current.files;
        if (!newFile) return;
        loadFile(newFile);
    };
    const loadFile = async (file: File) => {
        if (!ACCEPTED_FORMATS.includes(file.type)) {
            changeError("La imagen debe estar en formato jpg.");
            return;
        }
        if (file.size > MAX_BYTES_SIZE) {
            changeError(`Máximo ${MAX_MB_SIZE}MB.`);
            return;
        }
        const fileB64 = await fileToBase64(file);
        changeError(null);
        changePhoto(fileB64);
    };
    const doDeletePhoto = () => {
        if ($input.current?.value) $input.current.value = "";
        deletePhoto();
    }
    const hasImage = url || b64;
    return (
        <Container direction="column" align="center" gap="19px">
            {hasImage && <DeleteImageBtn
                onClick={doDeletePhoto}
                icon="material-symbols:delete"
            />}
            <CollaboratorImage
                name={name}
                surname={surname}
                urlPhoto={url}
                b64={b64}
            />
            <input
                ref={$input}
                type="file"
                accept="image/jpeg"
                onChange={selectFiles}
                hidden
            />
            <UploadBtn
                onClick={openInputFile}
                icon="material-symbols:add-a-photo"
                content={hasImage ? "Actualizar foto" : "Subir foto"}
            />
            <ErrorMessage text={error} />
        </Container>
    );
};

export default PhotoUploader;
