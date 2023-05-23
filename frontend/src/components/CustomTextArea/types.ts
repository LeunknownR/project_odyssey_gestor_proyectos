import { ChangeEvent } from "react";

export type CustomTextAreaProps = {
    placeholder?: string;
    label?: string;
    variant?: string;
    maxLength?: number;
    size?: string;
    width?: string;
    maxWidth?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
