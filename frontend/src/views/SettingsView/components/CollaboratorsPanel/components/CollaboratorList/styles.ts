import { FlexFlow } from "src/components/styles";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    overflow: hidden;
`;
export const List = styled(FlexFlow.withComponent("ul"))`
    width: 100%;
`;
