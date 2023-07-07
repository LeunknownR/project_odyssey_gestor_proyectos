import { FlexFlow } from 'src/components/styles';
import styled from 'styled-components';

export const Container = styled(FlexFlow.withComponent("section"))`
    width: 35%;
    padding: 45px 35px;
    height: calc(100vh - var(--main-header-height));
`;