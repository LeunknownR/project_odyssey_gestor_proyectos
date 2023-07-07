import { FlexFlow } from "src/components/styles";
import styled from "styled-components";

export const Container = styled(FlexFlow.withComponent("section"))`
    width: 65%;
    border-top: 1px solid var(--darkblue-4);
    height: calc(100vh - var(--main-header-height));
`;
