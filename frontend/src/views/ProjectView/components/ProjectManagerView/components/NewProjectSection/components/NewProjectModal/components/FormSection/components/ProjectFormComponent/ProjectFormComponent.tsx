import CustomTextField from "src/components/CustomTextField/CustomTextField";
import CustomTextArea from "src/components/CustomTextArea/CustomTextArea";
import { ProjectFormComponentProps } from "./types";
import { ChangeEvent } from "react";
import ResponsiveButtons from "../../../ResponsiveButtons/ResponsiveButtons";
import { Container } from "./styles";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import { FlexFlow } from "src/components/styles";
import Duration from "src/views/ProjectView/components/ProjectManagerView/components/Duration/Duration";
import { TEXT_FIELD_PROPS } from "src/views/ProjectView/components/ProjectManagerView/utils/constants";

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
                variant="primary"
                value={name}
                onChange={changeNameProjectField}
            />
            <CustomTextArea
                {...TEXT_FIELD_PROPS.PROJECT_DESCRIPTION}
                variant="primary"
                value={description}
                onChange={changeDescriptionProjectField}
            />
            <Duration form={form} labelColor="var(--white-1)" />
            {isMobile && 
                <FlexFlow justify="flex-end">
                    <ResponsiveButtons tabIdx={tabIdx} toPage={toPage} />
                </FlexFlow>}
        </Container>
    );
};

export default ProjectFormComponent;
