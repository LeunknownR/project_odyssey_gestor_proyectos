import styled from "styled-components";
import { MOBILE_WIDTH } from "src/config/constants";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;
export const DataPart = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 0 70px;
    gap: 30px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        flex-direction: column;
        padding: 0;
    }
`;
export const Description = styled.p`
    color: var(--white-1);
    font-weight: 400;
    font-size: 17px;
    max-width: 565px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 15px;
        max-width: unset;
    }
    align-items: center;
    gap: 30px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 10px;
    }
`;
export const BackArrowContainer = styled(Link)`
    transition: 0.3s;
    border-radius: 100%;
    padding: 2px;
    .iconify {
        color: var(--white-1);
        font-size: 35px;
    }
    :hover {
        background-color: var(--white-1-12);
    }
    :active {
        scale: 0.85;
    }
`;
export const TitleIconContainer = styled.span`
    .iconify {
        color: var(--white-1);
        background-color: var(--green-1);
        font-size: 50px;
        border-radius: 4px;
        @media (max-width: ${MOBILE_WIDTH}px) {
            font-size: 35px;
        }
    }
`;
export const ProjectName = styled.h1`
    color: var(--white-1);
    font-size: 36px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 20px;
    }
`;
export const OptionsWrapper = styled.div`
    position: relative;
`;
