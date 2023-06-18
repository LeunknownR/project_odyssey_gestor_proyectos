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
        size && classList.push(size);
        variant && classList.push(variant);
        return classList.join(" ");
    };
    return (
        <Container width={width} maxWidth={maxWidth} className={getClassName()}>
            {label && (
                <LabelContent className={getClassName()}>{label}</LabelContent>
            )}
            <Content className={getClassName()}>
                <TextArea
                    className={getClassName()}
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
