import { FlexFlow } from 'src/components/styles';
import styled from 'styled-components';

export const Container = styled(FlexFlow.withComponent("header"))`
    color: var(--white-1);
    h2 {
        font-size: 18px;
    }
`;
export const IconContainer = styled.span`
    display: flex;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.2s;
    .iconify {
        font-size: 22px;
    }
    :hover {
        background-color: var(--white-1-12);
    }
`;