import { ChangeEvent, FocusEventHandler } from "react";

export type CustomTextFieldProps = {
    placeholder?: string;
    label?: string;
    type?: string;
    name?: string;
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
    onBlur?: FocusEventHandler<HTMLInputElement>
}

export type TextInputTarget = {
    target: {
        name: string;
        value: string;
    };
};