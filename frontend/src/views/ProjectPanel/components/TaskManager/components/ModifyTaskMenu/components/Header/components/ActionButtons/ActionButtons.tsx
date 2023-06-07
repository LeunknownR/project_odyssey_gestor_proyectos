import { useState } from "react";
import { Container, DeleteButton, SaveButton, SlideButton, Wrapper } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";

const ActionButtons = () => {
    const [actionButtonsOpen, setAreActionButtonsOpen] = useState(false);
    return (
        <Container>
            <SlideButton
                onClick={() => setAreActionButtonsOpen(true)}
                className={actionButtonsOpen && "inactive"}
            >
                <Icon icon="ic:sharp-double-arrow" rotate={2} />
            </SlideButton>
            <Wrapper
                className={actionButtonsOpen && "active"}
                tabIndex={0}
                onBlur={() => setAreActionButtonsOpen(false)}
            >
                <DeleteButton onClick={() => console.log("GNOMO BORRAR")}>
                    <Icon icon="ion:skull" />
                </DeleteButton>
                <SaveButton onClick={() => console.log("GNOMO GUARDAR")}>
                    <Icon icon="fluent:shield-32-filled" />
                </SaveButton>
            </Wrapper>
        </Container>
    );
};

export default ActionButtons;
