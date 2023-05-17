//#region Styles
import { useEffect } from "react";
import { Container, Content } from "./styles";
import { ModalProps } from "./types";
//#endregion
//#region Types
//#endregion

const Modal = ({
    children,
    isOpen = false,
    sizeProps,
    handleClose,
    handleOpen,
}: ModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
            return;
        }
        document.body.classList.remove("no-scroll");
    }, [isOpen]);
    return (
        <Container
            className={isOpen && "open"}
            onMouseDown={() => {
                handleClose ? handleClose() : handleOpen(false);
            }}
        >
            <Content
                width={sizeProps?.width}
                minWidth={sizeProps?.minWidth}
                maxWidth={sizeProps?.maxWidth}
                padding={sizeProps?.padding}
                borderRadius={sizeProps?.borderRadius}
                className={isOpen && "opened"}
                onMouseDown={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.stopPropagation();
                }}
            >
                {children}
            </Content>
        </Container>
    );
};

export default Modal;
