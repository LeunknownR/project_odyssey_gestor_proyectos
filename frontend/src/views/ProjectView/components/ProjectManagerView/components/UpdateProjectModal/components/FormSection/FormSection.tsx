import { Container, Title } from "./styles";
import { FormSectionProps } from "./types";
import ProjectFormComponent from "../ProjectFormComponent/ProjectFormComponent";
import { FlexFlow } from "src/components/styles";

const FormSection = ({ form, tabIdx, toPage }: FormSectionProps) => {
    return (
        <Container>
            <FlexFlow direction="column" width="80%" alignSelf="center" gap="40px">
                <Title>Actualizar Proyecto</Title>
                <ProjectFormComponent form={form} tabIdx={tabIdx} toPage={toPage}/>
            </FlexFlow>
        </Container>
    );
};

export default FormSection;
