import useMainContext from "src/utils/contexts/main-context/useMainContext";
import { Container } from "./styles";
import { ProjectDeadlineProps } from "./types";
import { Column } from "src/components/styles";

const ProjectDeadline = ({ 
    startDate, endDate, 
    variant = "long"
}: ProjectDeadlineProps) => {
    const { isMobile } = useMainContext();
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
            {isMobile && variant === "short"
            ? <Column>
                <span>
                    <b>Desde:</b> {readableDate.start}
                </span>
                <span>
                    <b>Hasta:</b> {readableDate.end}
                </span>
            </Column>
            : `${readableDate.start} - ${readableDate.end}`}
        </Container>
    );
};

export default ProjectDeadline;
