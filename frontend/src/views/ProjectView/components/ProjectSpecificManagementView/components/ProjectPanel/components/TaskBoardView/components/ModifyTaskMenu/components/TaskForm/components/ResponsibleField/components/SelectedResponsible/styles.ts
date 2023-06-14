import styled from "styled-components";
import { FlexFlow } from "src/components/styles";

export const Container = styled(FlexFlow)`
    background-color: var(--white-1-12);
    border-radius: 10px;
    & > span {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 220px;
        color: var(--white-1);
        font-weight: 700;
    }
`;
