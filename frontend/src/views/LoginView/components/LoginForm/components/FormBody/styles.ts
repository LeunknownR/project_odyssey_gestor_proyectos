import { FlexFlow } from "src/components/styles";
import styled from "styled-components";

export const Container = styled(FlexFlow)`
    position: relative;
    @media (max-width: 600px) {
        width: 100%;
    }
`;