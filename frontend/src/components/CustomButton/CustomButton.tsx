//#region Libraries
import { Icon } from "@iconify/react";
//#endregion
//#region Styles
import { Container, IconContainer } from "./styles";
import { CustomButtonProps } from "./types";
//#endregion
//#region Types
//#endregion

const CustomButton = ({
    content,
    disabled = false,
    variant = "main",
    size,
    onClick,
    icon,
    width,
    weight,
    padding,
    maxWidth,
    iconAfterText,
    alignSelf
}: CustomButtonProps) => {
    const getClassName = () => {
        const classList: string[] = [];
        variant && classList.push(variant);
        size && classList.push(size);
        return classList.join(" ");
    }
    return (
        <Container 
            className={getClassName()}
            disabled={disabled} 
            type="submit"
            onClick={onClick}
            width={width}
            weight={weight}
            maxWidth={maxWidth}
            padding={padding}
            alignSelf={alignSelf}>
            {icon && <IconContainer isIconAfterText={iconAfterText}><Icon icon={icon} /></IconContainer>}
            {content}
        </Container>
    );
};

export default CustomButton;
