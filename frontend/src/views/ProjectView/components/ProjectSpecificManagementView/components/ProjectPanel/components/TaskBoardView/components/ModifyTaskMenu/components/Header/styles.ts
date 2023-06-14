import { FlexFlow } from 'src/components/styles';
import styled from 'styled-components';

export const Container = styled(FlexFlow.withComponent("header"))`
    background-color: #051E2F;
    padding: 30px 0 30px 30px;
`;
export const TaskName = styled.h2`
    color: var(--white-2);
    font-size: 24px;
`;  
