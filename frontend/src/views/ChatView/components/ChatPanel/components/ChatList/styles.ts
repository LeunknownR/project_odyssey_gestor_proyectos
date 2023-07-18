import styled from "styled-components";
import { FlexFlow } from "src/components/styles";

export const Container = styled.div`
    display: flex;
    overflow: hidden;
`;
export const List = styled(FlexFlow.withComponent("ul"))`
    width: 100%;
`;