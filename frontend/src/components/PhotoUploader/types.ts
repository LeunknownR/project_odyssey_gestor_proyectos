type DataPhoto = {
    url: string | null;
    b64: string | null;
}
export type PhotoUploaderProps = {
    name: string;
    surname: string;
    data: DataPhoto,
    changePhoto: (file: string) => void;
    error: string | null;
    changeError: (error: string | null) => void;
    deletePhoto: () => void;
}