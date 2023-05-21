import CustomTextField from "src/components/CustomTextField/CustomTextField";
import CustomTextArea from "src/components/CustomTextArea/CustomTextArea";
import { Column } from "src/components/styles";
import Duration from "./components/Duration/Duration";
import { ProjectFormProps } from "./types";
import { ChangeEvent } from "react";
import { TEXT_FIELD_PROPS } from "src/views/ProjectManager/utils/constants";

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
        <Column gap="25px" width="92%" alignSelf="center">
            <CustomTextField
                {...TEXT_FIELD_PROPS.PROJECT_NAME}
                value={name}
                onChange={changeNameProjectField}
            />
            <CustomTextArea
                {...TEXT_FIELD_PROPS.PROJECT_DESCRIPTION}
                value={description}
                onChange={changeDescriptionProjectField}
            />
            <Duration form={form} />
        </Column>
    );
};

export default ProjectForm;
