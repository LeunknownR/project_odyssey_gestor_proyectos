import CustomButton from "src/components/CustomButton/CustomButton";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    @media (max-width: 600px) {
        flex-direction: row;
        gap: 5px;
    }
`;
export const ConfigButton = styled(CustomButton)`
    color: var(--white-1);
    background-color: #162834;
    padding: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    :hover {
        color: #162834;
        background-color: var(--white-1);
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 15px;
    }
`;
export const LogoutButton = styled(CustomButton)`
    color: var(--white-1);
    background-color: #8e4229;
    padding: 8px;
    font-weight: 700;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    :hover {
        color: #8e4229;
        background-color: var(--white-1);
    }
`;
