import { Container, Label, Value } from "./styles";
import { ProjectDeadlineProps } from "./types";

const ProjectDeadline = ({ 
    startDate, endDate, 
    variant = "long", withLabel = false
}: ProjectDeadlineProps) => {
    const convertMilisToReadableDate = (milis: number) => {
        const date = new Date(milis);
        return date.toLocaleDateString('es-ES', {day: 'numeric', month: `${variant}`})
    }
    const readableDate: ({
        start: string,
        end: string
    }) = {
        start: convertMilisToReadableDate(startDate),
        end: convertMilisToReadableDate(endDate)
    };
    return (
        <Container>
            {withLabel && <Label>Periodo:</Label>}
            <Value>{readableDate.start} - {readableDate.end}</Value>
        </Container>
    );
};

export default ProjectDeadline;
