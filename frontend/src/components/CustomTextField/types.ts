import { ChangeEvent } from "react";

export type CustomTextFieldProps = {
    placeholder?: string;
    label?: string;
    type?: string;
    variant?: string;
    maxLength?: number;
    size?: string;
    width?: string;
    maxWidth?: string;
    disabled?: boolean;
    value?: string;
    error?: string | null;
    restriction?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type TextInputTarget = {
    target: {
        value: string;
    };
};