import { Row } from "src/components/styles";
import {
    Container,
    IconContainer,
    Label,
    OptionsWrapper,
    ProjectName,
} from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import MenuOptions from "src/views/components/MenuOptions/MenuOptions";
import ProjectDeadline from "./components/ProjectDeadline/ProjectDeadline";
import { AllProjectCardProps } from "./types";
import { Project } from "src/entities/project/types";
import { useNavigate } from "react-router-dom";
import { AbsolutePaths } from "src/config/absolutePaths";
import { setProjectId } from "src/storage/project.session";

const AllProjectCard = ({
    project,
    setCurrentProject,
    updateProjectModal,
    deleteProjectModal,
}: AllProjectCardProps) => {
    const { name, startDate, endDate, state } = project;
    const navigate = useNavigate();
    //GNOMO: Reutilizar código
    const openUpdateProjectModal = () => updateProjectModal.open(true);
    const openDeleteProjectModal = () => deleteProjectModal.open(true);
    const moveToProjectDetails = (project: Project) => {
        console.log("movido a detalles")
        navigate(AbsolutePaths.PROJECT_DETAILS);
        setProjectId(project.id)
    }
    return (
        <Container className={state}>
            <Row align="center" gap="10px">
                <IconContainer>
                    <Icon icon="ph:projector-screen-chart-fill" />
                </IconContainer>
                <ProjectName title={name}>{name}</ProjectName>
            </Row>
            <Row align="center" gap="25px">
                <Row gap="15px" align="center">
                    <Label>Fecha</Label>
                    <ProjectDeadline startDate={startDate} endDate={endDate} />
                </Row>
                <OptionsWrapper onClick={() => setCurrentProject(project)}>
                    <MenuOptions
                        menuPosition="right"
                        onClickEdit={openUpdateProjectModal}
                        onClickDelete={openDeleteProjectModal}
                        onClickDetails={moveToProjectDetails}
                    />
                </OptionsWrapper>
            </Row>
        </Container>
    );
};

export default AllProjectCard;
