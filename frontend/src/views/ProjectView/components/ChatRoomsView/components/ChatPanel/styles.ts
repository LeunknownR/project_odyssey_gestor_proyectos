import { FlexFlow } from 'src/components/styles';
import styled from 'styled-components';

export const Container = styled(FlexFlow.withComponent("section"))`
    width: 40%;
    padding: 45px 40px;
    height: calc(100vh - var(--main-header-height));
`;