import { useEffect } from "react";
//#region Styles
import { Container, Content } from "./styles";
//#endregion
//#region Types
import { ModalProps } from "./types";
//#endregion

const Modal = ({
    children,
    isOpen = false,
    sizeProps,
    handleClose,
    open: handleOpen,
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
