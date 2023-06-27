import { useEffect } from "react";
//#region Styles
import { Container, Content } from "./styles";
//#endregion
//#region Types
import { ModalProps } from "./types";
//#endregion

const Modal = ({
    className,
    isOpen = false,
    sizeProps,
    handleClose,
    open, children,
}: ModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
            return;
        }
        document.body.classList.remove("no-scroll");
    }, [isOpen]);
    const getClassName = () => {
        const classList: string[] = ["modal"];
        className && classList.push(className);
        isOpen && classList.push("open");
        return classList.join(" ");
    }
    return (
        <Container
            className={getClassName()}
            onMouseDown={() => {
                handleClose ? handleClose() : open(false);
            }}>
            <Content
                width={sizeProps?.width}
                minWidth={sizeProps?.minWidth}
                maxWidth={sizeProps?.maxWidth}
                padding={sizeProps?.padding}
                borderRadius={sizeProps?.borderRadius}
                className={isOpen && "opened"}
                onMouseDown={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.stopPropagation();
                }}>
                {children}
            </Content>
        </Container>
    );
};

export default Modal;
