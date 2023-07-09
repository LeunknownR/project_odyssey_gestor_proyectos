import { Container, Content, LabelContent, MaxLength, TextArea } from "./styles";
import { CustomTextAreaProps } from "./types";

const CustomTextArea = ({
    className, placeholder,
    label, variant,
    maxLength, size,
    width, maxWidth, disabled = false,
    value, onChange, onBlur,
    characterCounter = true,
    onKeyDown
}: CustomTextAreaProps) => {
    const getClassName = () => {
        const classList: string[] = [];
        className && classList.push(className)
        disabled && classList.push("disabled");
        size && classList.push(size);
        variant && classList.push(variant);
        return classList.join(" ");
    };
    const classNameFull: string = getClassName();
    const growTextArea = () => {
        console.log("crece")
    }
    return (
        <Container width={width} maxWidth={maxWidth} className={classNameFull}>
            {label && (
                <LabelContent className={classNameFull}>{label}</LabelContent>
            )}
            <Content className={classNameFull}>
                <TextArea
                    className={classNameFull}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    onBlur={onBlur}/>
                {(characterCounter && !disabled) && <MaxLength>{value.length} / {maxLength}</MaxLength>}
            </Content>
        </Container>
    );
};

export default CustomTextArea;
