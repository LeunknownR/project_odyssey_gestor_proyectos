export type ProjectDeadlineProps = {
    startDate: number;
    endDate: number;
    variant?: "long" | "short";
    withLabel?: boolean;
}