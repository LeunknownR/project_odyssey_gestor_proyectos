//#region Libraries
import styled from "styled-components";
//#endregion

export const CalendarPicker = styled.div`
    position: absolute;
    top: calc(100% + 4px);
    z-index: 200;
    border-radius: 4px;
    border: 1px solid var(--purple-2);
    width: 100%;
`;
export const Calendar = styled.header`
    display: flex;
    flex-direction: column;
    padding: 21px 20px;
    background-color: var(--light-1);
    border-radius: inherit;
    & span {
        font-size: 11px;
        text-align: center;
        padding: 8px 6px;
        margin: 1px;
        color: var(--light-gray-5);
    }
`;
export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--purple-2);
    padding: 14px 14px;
    user-select: none;
    cursor: default;
    & h5 {
        color: var(--light-1);
        margin: 0;
        font-size: 12px;
    }
`;
export const ContainerChangeMonthButton = styled.div`
    position: relative;
    border-radius: 4px;
    transition: 0.35s;
    font-size: 12px;
    padding: 5px;
    padding-left: 6px;
    padding-top: 5px;
    user-select: none;
    cursor: pointer;
    & .iconify {
        color: var(--light-1);
    }
    &.left .iconify {
        transform: rotate(90deg);
    }
    &.right .iconify {
        transform: rotate(-90deg);
    }
    &:hover {
        background-color: #25252533;
    }
    &.disabled {
        pointer-events: none;
        & .iconify {
            color: #25252533;
        }
    }
`;

export const WeekDays = styled.header`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 8px;
    user-select: none;
    & span {
        cursor: default;
    }
`;
export const Days = styled.section`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    & span {
        border-radius: 45%;
        user-select: none;
        &.day {
            padding: 8px 0;
            cursor: pointer;
            &:not(.disabled) {
                transition: 0.35s;
                &:not(.selected).today {
                    border: 1.5px solid var(--purple-2);   
                }
            }
            &:hover {
                background-color: var(--purple-4);
                color: var(--light-1);
            }
            &.selected {
                background-color: var(--purple-1);
                color: var(--light-1);
            }
            &.disabled {
                background-color: var(--light-1);
                color: var(--light-3);
                pointer-events: none;
            }
        }
    }
`;
