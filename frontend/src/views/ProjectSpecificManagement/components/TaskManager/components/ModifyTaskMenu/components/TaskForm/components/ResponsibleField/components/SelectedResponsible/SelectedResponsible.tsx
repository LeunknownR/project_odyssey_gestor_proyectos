import UserImage from "src/views/components/UserImage/UserImage";
import { SelectedResponsibleProps } from "./types";
import { Container, IconContainer } from "./styles";
import { FlexFlow } from "src/components/styles";
import { Icon } from "@iconify/react/dist/iconify.js";

const SelectedResponsible = ({
    selectedResponsible,
    eraseSelectedResponsible
}: SelectedResponsibleProps) => {
    const { name, surname, urlPhoto } = selectedResponsible;
    return (
        <FlexFlow align="center" gap="3px">
            <Container align="center" gap="10px" padding="4px 10px">
                <UserImage
                    name={name}
                    surname={surname}
                    urlPhoto={urlPhoto}
                    className="small"
                />
                <span title={`${name} ${surname}`}>
                    {name} {surname}
                </span>
            </Container>
            <IconContainer onClick={eraseSelectedResponsible}>
                <Icon icon="material-symbols:close" />
            </IconContainer>
        </FlexFlow>
    );
};

export default SelectedResponsible;
