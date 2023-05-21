import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 100%;
    background-color: var(--white-1-12);
    border: 1px solid var(--white-1-50); 
    padding: 7px 24px;
    border-radius: 10px;
    &.O {
        border-left: 27px solid var(--green-1);
    }
    &.F {
        border-left: 27px solid var(--red-0);
    }
    &.P {
        border-left: 27px solid var(--yellow-1);
    }
`;
export const IconContainer = styled.span`
    .iconify {
        color: var(--white-1);
        font-size: 40px;
    }
`;
export const ProjectName = styled.h2`
    color: var(--white-1);
    font-size: 18px;
`;
export const Label = styled.span`
    color: var(--white-1);
    font-weight: 700;
    font-size: 17px;
`;
export const OptionsWrapper = styled.div`
    position: relative
`;