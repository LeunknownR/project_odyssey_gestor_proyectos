import { CustomTextFieldContainer } from "src/components/CustomTextField/styles";
import styled from "styled-components";

export const Container = styled.section`
    background-color: var(--darkblue-4);
    display: flex;
    justify-content: center;
`;
export const Content = styled.main`
    display: flex;
    flex-direction: column;
    gap: 50px;
    min-height: calc(100vh - var(--main-header-height));
    width: 80%;
    margin: 50px 0;
`;
export const ProjectFinderWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    ${CustomTextFieldContainer} {
        width: 45%;
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
