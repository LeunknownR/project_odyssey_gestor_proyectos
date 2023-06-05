import { Column } from "src/components/styles";
import { Container, Title } from "./styles";
import { FormSectionProps } from "./types";
import ProjectFormComponent from "../ProjectFormComponent/ProjectFormComponent";

const FormSection = ({ form, tabIdx, toPage }: FormSectionProps) => {
    return (
        <Container>
            <Column width="80%" alignSelf="center" gap="40px">
                <Title>Actualizar Proyecto</Title>
                <ProjectFormComponent form={form} tabIdx={tabIdx} toPage={toPage}/>
            </Column>
        </Container>
    );
};

export default FormSection;