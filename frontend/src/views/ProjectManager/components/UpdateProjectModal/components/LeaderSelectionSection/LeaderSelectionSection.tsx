import { Icon } from "@iconify/react/dist/iconify.js";
import { Container, Column } from "./styles";
import { CloseButtonProjectForm } from "src/views/ProjectManager/styles";
import ProjectInfo from "src/views/ProjectManager/components/ProjectInfo/ProjectInfo";
import Footer from "./components/Footer/Footer";
import { LeaderSelectionSectionProps } from "./types";
import LeaderSelector from "../../../NewProjectSection/components/NewProjectModal/components/LeaderSelector/LeaderSelector";
import { FlexFlow } from "src/components/styles";

const LeaderSelectionSection = ({
    modalProps,
    form,
    currentLeader,
    preloader,
    updateProject,
    tabIdx,
    toPage
}: LeaderSelectionSectionProps) => {
    return (
        <Container>
            <CloseButtonProjectForm onClick={() => modalProps.open(false)} className="update">
                <Icon icon="material-symbols:close" />
            </CloseButtonProjectForm>
            <FlexFlow direction="column" width="80%" alignSelf="center" gap="35px">
                <ProjectInfo form={form} variant="update" />
                <Column direction="column" width="85%" alignSelf="center" gap="180px">
                    <LeaderSelector
                        form={form}
                        modalProps={modalProps}
                        variant="secondary"
                        preloader={preloader}
                        currentLeader={currentLeader}
                    />
                    <Footer
                        form={form}
                        updateProject={updateProject}
                        tabIdx={tabIdx}
                        toPage={toPage}
                    />
                </Column>
            </FlexFlow>
        </Container>
    );
};

export default LeaderSelectionSection;
