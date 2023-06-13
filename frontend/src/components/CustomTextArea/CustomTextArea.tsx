import { Container, Content, LabelContent, MaxLength, TextArea } from "./styles";
import { CustomTextAreaProps } from "./types";

const CustomTextArea = ({
    className, placeholder,
    label, variant,
    maxLength, size,
    width, maxWidth,
    value, onChange,
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
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                {characterCounter && <MaxLength>{value.length} / {maxLength}</MaxLength>}
            </Content>
        </Container>
    );
};

export default CustomTextArea;
