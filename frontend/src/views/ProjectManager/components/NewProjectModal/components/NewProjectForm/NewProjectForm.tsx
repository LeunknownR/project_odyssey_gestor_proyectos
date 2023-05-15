import CustomTextField from "src/components/CustomTextField/CustomTextField";
import CustomTextArea from "src/components/CustomTextArea/CustomTextArea";
import { Column } from "src/components/styles";

const NewProjectForm = () => {
    return (
        <Column gap="25px" width="90%" alignSelf="center">
            <CustomTextField
                label="Nombre del proyecto"
                placeholder="Ejm: Mi superproyecto"
                variant="primary"
            />
            <CustomTextArea
                label="Descripción"
                placeholder="Ejm: Proyecto para desarrollar el gran proyecto del siglo XXI."
                variant="primary"
            />
        </Column>
    );
};

export default NewProjectForm;
