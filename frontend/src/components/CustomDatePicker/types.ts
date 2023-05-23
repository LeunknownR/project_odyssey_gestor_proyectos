export type CustomDatePickerProps = {
    label?: string;
    placeholder?: string;
    onChange?: (timestamp: number) => void;
    value?: number;
    period?: Period;
    availableDays: number[];
    error?: boolean;
    errorText?: string;
    disabled?: boolean;
    width?: string;
};
export type Period = {
    min: number[];
    max: number[];
};
