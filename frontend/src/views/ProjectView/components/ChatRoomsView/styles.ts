import { FlexFlow } from 'src/components/styles';
import styled from 'styled-components';

export const Container = styled(FlexFlow.withComponent("main"))`
    width: calc(100vw - var(--main-sidebar-width));
`;
