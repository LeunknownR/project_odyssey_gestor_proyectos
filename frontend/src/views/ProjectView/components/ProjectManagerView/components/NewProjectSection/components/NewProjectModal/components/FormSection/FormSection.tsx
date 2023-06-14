import { FlexFlow } from "src/components/styles";
import ProjectFormComponent from "./components/ProjectFormComponent/ProjectFormComponent";
import { Container, Title } from "./styles";
import { FormSectionProps } from "./types";

const FormSection = ({ form, tabIdx, toPage }: FormSectionProps) => {
    return (
        <Container>
            <FlexFlow direction="column" width="80%" alignSelf="center" gap="40px">
                <Title>Nuevo Proyecto</Title>
                <ProjectFormComponent form={form} tabIdx={tabIdx} toPage={toPage}/>
            </FlexFlow>
        </Container>
    );
};

export default FormSection;
