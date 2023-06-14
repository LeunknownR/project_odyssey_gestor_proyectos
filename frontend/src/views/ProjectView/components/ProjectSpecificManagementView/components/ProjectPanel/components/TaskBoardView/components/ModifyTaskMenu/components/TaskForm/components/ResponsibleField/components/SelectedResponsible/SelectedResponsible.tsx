import UserImage from "src/views/components/UserImage/UserImage";
import { SelectedResponsibleProps } from "./types";
import { Container } from "./styles";
import { FlexFlow } from "src/components/styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { DeleteSelectedDataField } from "../../../../styles";

const SelectedResponsible = ({
    selectedResponsible,
    eraseSelectedResponsible
}: SelectedResponsibleProps) => {
    const { name, surname, urlPhoto } = selectedResponsible;
    return (
        <FlexFlow align="center" gap="5px">
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
            <DeleteSelectedDataField onClick={eraseSelectedResponsible}>
                <Icon icon="material-symbols:close" />
            </DeleteSelectedDataField>
        </FlexFlow>
    );
};

export default SelectedResponsible;
