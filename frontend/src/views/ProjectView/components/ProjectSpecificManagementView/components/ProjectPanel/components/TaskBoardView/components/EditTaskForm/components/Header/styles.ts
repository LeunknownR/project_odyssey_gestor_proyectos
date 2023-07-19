import CustomButton from 'src/components/CustomButton/CustomButton';
import { FlexFlow } from 'src/components/styles';
import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const Container = styled(FlexFlow.withComponent("header"))`
    justify-content: space-between; 
    align-items: center; 
    gap: 15px;
    background-color: #051E2F;
    padding: 30px 0 30px 30px;
    width: 100%;
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 25px 0 10px 5px; 
        background-color: unset;
        gap: 5px;
    }
`;
export const CloseMenu = styled.span`
    display: flex;
    cursor: pointer;
    .iconify {
        color: var(--white-1);
        font-size: 35px;
    }
`;
export const ChangeStateButton = styled(CustomButton)`
    background-color: transparent;
    .iconify {
        color: var(--white-1);
        font-size: 20px;
    }
`;
export const DeleteButton = styled(CustomButton)`
    border-radius: 5px 0 0 5px;
    background-color: var(--red-2);
    color: var(--white-1);
    padding: 8px 10px;
    .iconify {
        font-size: 25px;
    }
`;
