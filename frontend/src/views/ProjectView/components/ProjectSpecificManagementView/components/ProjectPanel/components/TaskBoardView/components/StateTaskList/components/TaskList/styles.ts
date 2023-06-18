import { FlexFlow } from 'src/components/styles';
import styled from 'styled-components';

export const Container = styled(FlexFlow.withComponent("section"))`
    width: 100%;
    scroll-behavior: smooth;
`;
export const Content = styled(FlexFlow.withComponent("ul"))`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 20px;
    padding-top: 5px;
    padding-bottom: 10px;
    height: max-content;
    width: 100%;
`;