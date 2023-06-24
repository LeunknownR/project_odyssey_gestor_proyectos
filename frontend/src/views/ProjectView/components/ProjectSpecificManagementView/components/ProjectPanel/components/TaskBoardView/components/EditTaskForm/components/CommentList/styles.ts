import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding-left: 25px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        padding-left: 3px;
    }
`;
