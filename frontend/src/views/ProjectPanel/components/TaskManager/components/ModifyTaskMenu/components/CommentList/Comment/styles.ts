import { FlexFlow } from 'src/components/styles';
import styled from 'styled-components';

export const Container = styled(FlexFlow.withComponent("li"))`
    
`;
export const Collaborator = styled.h5`
    color: var(--white-1);
    font-size: 14px;
`;
export const Date = styled.span`
    font-weight: 700;
    color: var(--white-2);
    font-size: 12px;
`;
export const Content = styled.p`
    font-weight: 300;
    color: var(--white-1);
    font-size: 14px;
`;