import styled from "styled-components";
import { FlexFlow } from "src/components/styles";

export const Container = styled(FlexFlow)`
    background-color: var(--white-1-12);
    align-items: center;
    gap: 10px;
    padding: 4px 10px;
    border-radius: 10px;
    width: 100%;
    position: relative;
    & > span {
        display: block;
        width: 90%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: var(--white-1);
        font-weight: 700;
    }
`;
