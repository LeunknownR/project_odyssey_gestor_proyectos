import { Column } from "src/components/styles";
import { Container, CustomColumn } from "./styles";
import { CloseButtonProjectForm } from "src/views/ProjectManager/styles";
import ProjectInfo from "src/views/ProjectManager/components/ProjectInfo/ProjectInfo";
import LeaderSelector from "../LeaderSelector/LeaderSelector";
import Footer from "./components/Footer/Footer";
import { Icon } from "@iconify/react/dist/iconify.js";
import { LeaderSelectionSectionProps } from "./types";

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
            <Column width="80%" alignSelf="center" gap="35px">
                <ProjectInfo form={form} variant="create" />
                <CustomColumn width="85%" alignSelf="center" gap="180px">
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
                </CustomColumn>
            </Column>
        </Container>
    );
};

export default LeaderSelectionSection;
