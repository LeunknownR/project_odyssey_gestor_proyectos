import { Icon } from "@iconify/react/dist/iconify.js";
import { Column } from "src/components/styles";
import { Container, CustomColumn } from "./styles";
import { CloseButtonProjectForm } from "src/views/ProjectManager/styles";
import ProjectInfo from "src/views/ProjectManager/components/ProjectInfo/ProjectInfo";
import Footer from "./components/Footer/Footer";
import { LeaderSelectionSectionProps } from "./types";
import LeaderSelector from "../../../NewProjectSection/components/NewProjectModal/components/LeaderSelector/LeaderSelector";

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
            <Column width="80%" alignSelf="center" gap="35px">
                <ProjectInfo form={form} variant="update" />
                <CustomColumn width="85%" alignSelf="center" gap="180px">
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
                </CustomColumn>
            </Column>
        </Container>
    );
};

export default LeaderSelectionSection;
