import { FlexFlow } from 'src/components/styles';
import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    
`;
export const Label = styled.label`
    color: ${({color}) => color};
    font-size: 20px;
    font-weight: 700;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 16px;
    }
`;
export const DatePickersWrapper = styled(FlexFlow)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        flex-direction: column;
        width: 200px;
    }
`;