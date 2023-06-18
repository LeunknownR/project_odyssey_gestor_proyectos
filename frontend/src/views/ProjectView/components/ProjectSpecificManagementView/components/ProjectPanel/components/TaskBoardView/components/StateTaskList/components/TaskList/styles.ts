import { FlexFlow } from 'src/components/styles';
import styled from 'styled-components';

export const Container = styled(FlexFlow.withComponent("section"))`
    max-height: 60vh;
    width: 100%;
`;
export const Content = styled(FlexFlow.withComponent("ul"))`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 20px;
    height: max-content;
    width: 100%;
`;