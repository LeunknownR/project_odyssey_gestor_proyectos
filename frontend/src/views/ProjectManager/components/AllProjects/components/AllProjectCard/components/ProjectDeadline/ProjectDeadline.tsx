import useMainContext from "src/utils/contexts/main-context/useMainContext";
import { Container } from "./styles";
import { ProjectDeadlineProps } from "./types";
import { FlexFlow } from "src/components/styles";

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
            ? <FlexFlow direction="column">
                <span>
                    <b>Desde:</b> {readableDate.start}
                </span>
                <span>
                    <b>Hasta:</b> {readableDate.end}
                </span>
            </FlexFlow>
            : `${readableDate.start} - ${readableDate.end}`}
        </Container>
    );
};

export default ProjectDeadline;
