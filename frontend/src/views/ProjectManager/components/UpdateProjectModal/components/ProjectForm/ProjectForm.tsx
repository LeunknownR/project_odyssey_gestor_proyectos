import CustomTextField from "src/components/CustomTextField/CustomTextField";
import CustomTextArea from "src/components/CustomTextArea/CustomTextArea";
import { Column } from "src/components/styles";
import { TEXT_FIELD_PROPS } from "src/views/ProjectManager/utils/constants";
import Duration from "../../../Duration/Duration";
import { ProjectFormProps } from "./types";
import { ChangeEvent } from "react";

const ProjectForm = ({ form }: ProjectFormProps) => {
    const { name, description } = form.value;
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
        <Column gap="25px" width="90%" alignSelf="center">
            <CustomTextField
                {...TEXT_FIELD_PROPS.PROJECT_NAME}
                value={name}
                variant="secondary"
            />
            <CustomTextArea
                {...TEXT_FIELD_PROPS.PROJECT_DESCRIPTION}
                value={description}
                variant="secondary"
            />
            <Duration form={form} labelColor="var(--darkblue-1)"/>
        </Column>
    );
};

export default ProjectForm;
