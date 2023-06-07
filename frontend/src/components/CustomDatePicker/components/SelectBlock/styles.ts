//#region Libraries
import styled from "styled-components";
//#endregion

type CalendarPickerProps = {
    ref: any;
    className?: any;
}
export const CalendarPicker = styled.div<CalendarPickerProps>`
    position: absolute;
    top: calc(100% + 4px);
    z-index: 200;
    border-radius: 4px;
    border: 1px solid var(--purple-2);
    width: 100%;
    min-width: 190px;
    &.above {
        top: -225px;
    }
`;
export const Calendar = styled.header`
    display: flex;
    flex-direction: column;
    background-color: var(--white-1);
    border-radius: 0 0 5px 5px;
    padding: 10px 8px;
    & span {
        font-size: 11px;
        text-align: center;
        padding: 4px;
        margin: 1px;
        color: var(--light-gray-5);
    }
`;
export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--darkblue-1);
    padding: 14px 14px;
    user-select: none;
    border-radius: 5px 5px 0 0;
    cursor: default;
    & h5 {
        font-family: Lato;
        font-weight: 800;
        color: var(--white-1);
        margin: 0;
        font-size: 13px;
    }
`;
export const ContainerChangeMonthButton = styled.div`
    position: relative;
    border-radius: 4px;
    transition: 0.35s;
    font-size: 12px;
    padding: 5px;
    user-select: none;
    cursor: pointer;
    border-radius: 50%;
    span {
        display: flex;   
    }
    .iconify {
        color: var(--white-1);
        font-size: 16px;
    }
    &.left .iconify {
        transform: rotate(0deg);
    }
    &.right .iconify {
        transform: rotate(180deg);
    }
    &:hover {
        background-color: #25252533;
    }
    &.disabled {
        pointer-events: none;
        & .iconify {
            color: #25252599;
        }
    }
`;
export const WeekDays = styled.header`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    user-select: none;
    color: var(--darkblue-2);
    & span {
        font-family: Lato;
        cursor: default;
        font-weight: 400;
    }
`;
export const Days = styled.section`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    color: var(--darkblue-2);
    & span {
        font-family: Lato;
        border-radius: 5px;
        user-select: none;
        &.day {
            cursor: pointer;
            border: 1.5px solid transparent;
            transition: 0.3s;
            &:not(.disabled) {
                &:not(.selected).today {
                    border: 1.5px solid var(--darkblue-2);   
                }
            }
            &:hover {
                background-color: #2D5A7730;
            }
            &.selected {
                background-color: var(--darkblue-1);
                color: var(--white-1);
            }
            &.disabled {
                color: var(--white-3);
                pointer-events: none;
            }
        }
    }
`;
