//#region Libraries
import styled from "styled-components";
//#endregion
export const Container = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 103%;
`;
export const IconContainer = styled.span`
    display: flex;
    .iconify {
        font-size: 18px;
        color: var(--red-3);
    }
`;
type ErrorLabelProps = {
    textAlign?: string;
};
export const ErrorLabel = styled.p<ErrorLabelProps>`
    color: var(--red-3);
    font-size: 13px;
    text-align: ${({ textAlign = "left" }) => textAlign};
`;
