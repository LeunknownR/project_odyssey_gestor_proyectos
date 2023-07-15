import { FlexFlow } from 'src/components/styles';
import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 100%;
    background-color: var(--white-1-12);
    border: 1px solid var(--white-1-50); 
    padding: 7px 24px;
    padding-right: 14px;
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
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 5px 18px;
        padding-right: 10px;
        &.O, &.F, &.P {
            border-left-width: 15px;
        }
    }
`;
export const IconContainer = styled.span`
    .iconify {
        color: var(--white-1);
        font-size: 40px;
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        display: none;
    }
`;
export const ProjectName = styled.h2`
    color: var(--white-1);
    font-size: 18px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 12px;
        width: 25vw;
    }
`;
export const DateLabel = styled.span`
    color: var(--white-1);
    font-weight: 700;
    font-size: 17px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        display: none;
    }
`;
export const OptionsWrapper = styled.div`
    position: relative;
`;
export const EndContent = styled(FlexFlow)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        justify-content: space-between;
        gap: 8px;
    }
`;