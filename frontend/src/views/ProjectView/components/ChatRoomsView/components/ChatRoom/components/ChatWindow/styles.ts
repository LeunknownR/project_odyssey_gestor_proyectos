import { FlexFlow } from "src/components/styles";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 20px 0 20px 30px;
    border-radius: 10px;
    background: linear-gradient(180deg, #051e2f 0%, rgba(45, 90, 119, 0) 100%);
    height: 100%;
    overflow: hidden;
`;
export const MessageList = styled(FlexFlow.withComponent("ul"))`
    padding-right: 30px;
`;