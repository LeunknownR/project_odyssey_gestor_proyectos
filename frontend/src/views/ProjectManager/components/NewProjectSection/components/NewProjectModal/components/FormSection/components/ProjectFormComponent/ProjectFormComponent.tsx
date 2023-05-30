import CustomTextField from "src/components/CustomTextField/CustomTextField";
import CustomTextArea from "src/components/CustomTextArea/CustomTextArea";
import { Row } from "src/components/styles";
import Duration from "../../../../../../../Duration/Duration";
import { ProjectFormComponentProps } from "./types";
import { ChangeEvent } from "react";
import { TEXT_FIELD_PROPS } from "src/views/ProjectManager/utils/constants";
import ResponsiveButtons from "../../../ResponsiveButtons/ResponsiveButtons";
import { Container } from "./styles";
import useMainContext from "src/utils/contexts/main-context/useMainContext";

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
        <Container gap="25px" width="92%" alignSelf="center">
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
                <Row justify="flex-end">
                    <ResponsiveButtons tabIdx={tabIdx} toPage={toPage} />
                </Row>}
        </Container>
    );
};

export default ProjectFormComponent;
