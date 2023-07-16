import { Container } from "./styles";
import { ProjectDeadlineProps } from "./types";
import { FlexFlow } from "src/components/styles";

const ProjectDeadline = ({ 
    startDate, endDate, 
    variant = "long", mobile
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
        <Container className={variant}>
            {mobile && variant === "short"
            ? <FlexFlow 
                width="150px"
                align="flex-start">
                <b>Periodo:</b>{readableDate.start} - {readableDate.end}
            </FlexFlow>
            : `${readableDate.start} - ${readableDate.end}`}
        </Container>
    );
};

export default ProjectDeadline;
