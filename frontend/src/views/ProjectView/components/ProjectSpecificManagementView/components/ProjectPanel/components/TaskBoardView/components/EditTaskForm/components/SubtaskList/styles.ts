import CustomButton from 'src/components/CustomButton/CustomButton';
import { FlexFlow } from 'src/components/styles';
import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const Container = styled(FlexFlow)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 0 15px 0 0;
    }
`;
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0;
`;
export const Check = styled(CustomButton)`
    display: flex;
    cursor: pointer;
    transition: 0.35s;
    background-color: transparent;
    padding: 0;
    .iconify {
        border-radius: 50%;
        color: var(--white-1);
        font-size: 20px;
        transition: 0.35s;
    }
`;
