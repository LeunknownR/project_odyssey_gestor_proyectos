import { Period } from "../../types";

export type SelectBlockProps = {
    value: number;
    handlerChangeValue: (timestamp: any) => void;
    availableDays: number[];
    period: Period;
    calendarAbove: boolean;
};
export type HeaderProps = {
    currentMonthCalendar: CurrentMonthCalendar;
    changeMonth: (direction: number) => void;
    period: Period;
};
export type ChangeMonthButtonProps = {
    direction: string;
    onClick: () => void;
    disabled: boolean;
};

type CurrentMonthCalendar = {
    year: number;
    month: number;
};
