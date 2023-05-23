import { Container } from "./styles";
import { ProjectDeadlineProps } from "./types";

const ProjectDeadline = ({ startDate, endDate }: ProjectDeadlineProps) => {
    const convertMilisToReadableDate = (milis: number) => {
        const date = new Date(milis);
        return date.toLocaleDateString('es-ES', {day: 'numeric', month: 'long'})
    }
    return (
        <Container>
            {convertMilisToReadableDate(startDate)} - {convertMilisToReadableDate(endDate)}
        </Container>
    );
};

export default ProjectDeadline;
