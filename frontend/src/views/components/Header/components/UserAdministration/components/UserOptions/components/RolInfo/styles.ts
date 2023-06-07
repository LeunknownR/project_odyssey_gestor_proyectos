import { FlexFlow } from 'src/components/styles';
import styled from 'styled-components';

export const Container = styled(FlexFlow)`
    color: ${({ color }) => color};
`;
export const IconContainer = styled.span`
    display: flex;
    .iconify {
        font-size: 23px;
    }
`;
export const Rol = styled.span`
    font-size: 14px;
`;