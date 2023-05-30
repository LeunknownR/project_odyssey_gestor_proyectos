import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Wrapper } from "./styles";
import { NewProjectButtonProps } from "./types";

const NewProjectButton = ({ modal }: NewProjectButtonProps) => {
    return (
        <Wrapper>
            <Button onClick={() => modal.open(true)}>
                <Icon icon="mdi:layers-plus" />
                Nuevo proyecto
            </Button>
        </Wrapper>
    );
};

export default NewProjectButton;
