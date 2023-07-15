import { Container as ContainerCustomTextField } from "src/components/CustomTextField/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import styled from "styled-components";

export const Container = styled.section`
    background-color: var(--darkblue-4);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-top: 40px;
    padding-bottom: 15px;
    @media (max-width: 600px) {
        padding-top: 30px;
        padding-bottom: calc(var(--main-sidebar-height-mobile) + 5px);
    }
`;
export const Content = styled.main`
    display: flex;
    flex-direction: column;
    gap: 30px;
    min-height: calc(100vh - var(--main-header-height));
    width: 80%;
`;
export const ProjectFinderWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    ${ContainerCustomTextField} {
        width: 45%;
        @media (max-width: ${MOBILE_WIDTH}px) {
            width: 100%;
        }
    }
`;
export const CloseButtonProjectForm = styled.div`
    position: absolute;
    top: 4%;
    right: 2.5%;
    color: var(--darkblue-2);
    cursor: pointer;
    .iconify {
        width: max-content;
        font-size: 34px;
    }
    &.update {
        color: var(--white-1);
    }
`;