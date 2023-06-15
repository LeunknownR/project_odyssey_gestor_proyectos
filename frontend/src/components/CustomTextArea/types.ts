export type CustomTextAreaProps = {
    className?: string;
    placeholder?: string;
    label?: string;
    variant?: string;
    maxLength?: number;
    size?: string;
    width?: string;
    maxWidth?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
    characterCounter?: boolean;
};
