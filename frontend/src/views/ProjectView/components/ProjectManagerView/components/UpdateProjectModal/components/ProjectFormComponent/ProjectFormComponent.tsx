import CustomTextField from "src/components/CustomTextField/CustomTextField";
import CustomTextArea from "src/components/CustomTextArea/CustomTextArea";
import { FlexFlow } from "src/components/styles";
import { ProjectFormComponentProps } from "./types";
import { ChangeEvent } from "react";
import { Container } from "./styles";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import Duration from "../../../Duration/Duration";
import ResponsiveButtons from "../../../NewProjectSection/components/NewProjectModal/components/ResponsiveButtons/ResponsiveButtons";
import { TEXT_FIELD_PROPS } from "../../../../utils/constants";

const ProjectFormComponent = ({ form, tabIdx, toPage }: ProjectFormComponentProps) => {
    const { name, description } = form.value;
    const { isMobile } = useMainContext();
    const changeNameProjectField = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        form.change(TEXT_FIELD_PROPS.PROJECT_NAME.name, value);
    };
    const changeDescriptionProjectField = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        form.change(TEXT_FIELD_PROPS.PROJECT_DESCRIPTION.name, value);
    };
    return (
        <Container direction="column" gap="25px" width="92%" alignSelf="center">
            <CustomTextField
                {...TEXT_FIELD_PROPS.PROJECT_NAME}
                variant="secondary"
                value={name}
                onChange={changeNameProjectField}
            />
            <CustomTextArea
                {...TEXT_FIELD_PROPS.PROJECT_DESCRIPTION}
                variant="secondary"
                value={description}
                onChange={changeDescriptionProjectField}
            />
            <Duration form={form} labelColor="var(--darkblue-1)" />
            {isMobile && 
                <FlexFlow justify="flex-end">
                    <ResponsiveButtons tabIdx={tabIdx} toPage={toPage} />
                </FlexFlow>}
        </Container>
    );
};

export default ProjectFormComponent;