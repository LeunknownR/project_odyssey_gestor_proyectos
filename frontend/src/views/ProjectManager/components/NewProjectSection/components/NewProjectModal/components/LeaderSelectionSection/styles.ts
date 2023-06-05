import { Column } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 85px 0 70px;
`;
export const CustomColumn = styled(Column)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        width: 100%;
    }
`;