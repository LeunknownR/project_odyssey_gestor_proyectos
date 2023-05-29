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
    margin-top: 50px;
`;
export const ProjectFinderWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    //GNOMO PREGUNTAR A MANUEL SI MI MÉTODO ESTÁ ACHORAO O ÑOFI
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
