import { CollaboratorUser } from "src/entities/collaborator/types";

export type CustomInputSearchOption = {
    id: number;
    name: string;
    surname: string;
    urlPhoto: string | null;
};
export type CustomInputSearchProps = {
    label?: string;
    placeholder?: string;
    maxLength?: number;
    // options: CollaboratorUser[]; GNOMO
    options: CustomInputSearchOption[];
    value?: CustomInputSearchOption | null;
    variant: string;
    onChange: (value: CollaboratorUser) => void;
    fillOptions: (value: string) => void;
    clearOptions: () => void;
};
