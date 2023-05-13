export type CustomInputSearchOption = {
    id: number | string;
    name: string;
};
export type CustomInputSearchProps = {
    label?: string;
    placeholder?: string;
    maxLength?: number;
    options: CustomInputSearchOption[];
    value?: CustomInputSearchOption | null;
    variant: string;
    onChange: (value: CustomInputSearchOption | null) => void;
    fillOptions: (value: string) => void;
    // clearOptions: () => void;
};
