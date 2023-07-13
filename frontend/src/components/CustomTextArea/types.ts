import { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler } from "react";

export type CustomTextAreaProps = {
    className?: string;
    placeholder?: string;
    label?: string;
    variant?: string;
    maxLength?: number;
    size?: string;
    width?: string;
    maxWidth?: string;
    disabled?: boolean;
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
    onBlur?: FocusEventHandler<HTMLTextAreaElement>;
    characterCounter?: boolean;
};
