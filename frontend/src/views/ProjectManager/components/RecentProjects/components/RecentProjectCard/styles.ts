import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 280px;
    border: 2px solid var(--gray-1);
    background-color: #112430;
    border-radius: 7px;
    position: relative;
    .showSubMenu {
        display: block;
    }
    .SubMenuContainer {
        display: none;
    }
`;
export const Image = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    .iconify {
        font-size: 90px;
        color: #2a3c46;
    }
`;
export const TextRecentCard = styled.div`
    font-size: 13px;
    font-weight: bold;
    color: var(--dark-2);
    background-color: var(--white-3);
    border-radius: 0px 0px 5px 5px;
    width: 100%;
    padding: 10px;
    display: flex;
    gap: 7px;
    align-items: center;
    justify-content: space-between;
    div:first-child {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;
export const StateProject = styled.div`
    border-radius: 50%;
    width: 17px;
    height: 17px;
    display: flex;
    &.O {
        background-color: var(--green-1);
    }
    &.F {
        background-color: var(--red-0);
    }
    &.P {
        background-color: var(--yellow-1);
    }
`;
export const ProjectTitle = styled.h4`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 165px;
`;
