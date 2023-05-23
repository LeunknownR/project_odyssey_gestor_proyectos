import { Container, Content, LabelContent, MaxLength, TextArea } from "./styles";
import { CustomTextAreaProps } from "./types";

const CustomTextArea = ({
    placeholder,
    label,
    variant,
    maxLength,
    size,
    width,
    maxWidth,
    value,
    onChange,
}: CustomTextAreaProps) => {
    const getClassName = () => {
        const classList: string[] = [];
        size && classList.push(size);
        variant && classList.push(variant);
        return classList.join(" ");
    };
    const className: string = getClassName();
    return (
        <Container width={width} maxWidth={maxWidth} className={className}>
            {label && (
                <LabelContent className={className}>{label}</LabelContent>
            )}
            <Content className={className}>
                <TextArea
                    className={className}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                <MaxLength>0 / {maxLength}</MaxLength>
            </Content>
        </Container>
    );
};

export default CustomTextArea;
