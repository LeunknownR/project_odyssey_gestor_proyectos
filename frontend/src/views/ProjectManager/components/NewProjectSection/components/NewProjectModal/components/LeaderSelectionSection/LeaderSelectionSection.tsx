import { Container, Column } from "./styles";
import { CloseButtonProjectForm } from "src/views/ProjectManager/styles";
import ProjectInfo from "src/views/ProjectManager/components/ProjectInfo/ProjectInfo";
import LeaderSelector from "../LeaderSelector/LeaderSelector";
import Footer from "./components/Footer/Footer";
import { Icon } from "@iconify/react/dist/iconify.js";
import { LeaderSelectionSectionProps } from "./types";
import { FlexFlow } from "src/components/styles";

const LeaderSelectionSection = ({
    modalProps,
    form,
    preloader,
    registerProject,
    tabIdx,
    toPage
}: LeaderSelectionSectionProps) => {
    return (
        <Container>
            <CloseButtonProjectForm onClick={() => modalProps.open(false)}>
                <Icon icon="material-symbols:close" />
            </CloseButtonProjectForm>
            <FlexFlow direction="column" width="80%" alignSelf="center" gap="35px">
                <ProjectInfo form={form} variant="create" />
                <Column direction="column" width="85%" alignSelf="center" gap="180px">
                    <LeaderSelector
                        form={form}
                        modalProps={modalProps}
                        variant="primary"
                        preloader={preloader}
                    />
                    <Footer
                        registerProject={registerProject}
                        formIsCompleted={form.isCompleted}
                        tabIdx={tabIdx}
                        toPage={toPage}
                    />
                </Column>
            </FlexFlow>
        </Container>
    );
};

export default LeaderSelectionSection;
