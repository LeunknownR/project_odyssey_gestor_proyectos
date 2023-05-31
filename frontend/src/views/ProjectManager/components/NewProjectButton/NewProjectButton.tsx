import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Wrapper } from "./styles";
import { NewProjectButtonProps } from "./types";

const NewProjectButton = ({ openCreateProjectModal }: NewProjectButtonProps) => {
    return (
        <Wrapper>
            <Button onClick={openCreateProjectModal}>
                <Icon icon="mdi:layers-plus" />
                Nuevo proyecto
            </Button>
        </Wrapper>
    );
};

export default NewProjectButton;
