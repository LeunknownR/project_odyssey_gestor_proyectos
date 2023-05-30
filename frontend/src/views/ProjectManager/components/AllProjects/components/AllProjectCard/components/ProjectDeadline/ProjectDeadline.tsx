import { Container } from "./styles";
import { ProjectDeadlineProps } from "./types";

const ProjectDeadline = ({ 
    startDate, endDate, 
    variant = "long"
}: ProjectDeadlineProps) => {
    const convertMilisToReadableDate = (milis: number) => {
        const date = new Date(milis);
        return date.toLocaleDateString('es-ES', {day: 'numeric', month: `${variant}`})
    }
    return (
        <Container className={variant}>
            {convertMilisToReadableDate(startDate)} - {convertMilisToReadableDate(endDate)}
        </Container>
    );
};

export default ProjectDeadline;
