import { Container, Content, LabelContent, TextArea } from "./styles";
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
            </Content>
        </Container>
    );
};

export default CustomTextArea;
