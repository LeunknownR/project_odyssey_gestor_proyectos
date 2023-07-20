import CustomButton from "src/components/CustomButton/CustomButton";
import CustomTextField from "src/components/CustomTextField/CustomTextField";
import { FlexFlow } from "src/components/styles";
import styled from "styled-components";

export const Container = styled(FlexFlow)`
    height: calc(100vh - var(--main-header-height));
    border-top: 2px solid var(--darkblue-4);
    padding: 50px;
`;
export const CloseFormBtn = styled(CustomButton)`
    background: transparent;
    position: absolute;
    color: var(--white-1);
    font-size: 39px;
    right: 5%;
    top: 5%;
    .iconify {
        border-radius: 50%;
        padding: 3px;
        transition: 0.3s;
        :hover {
            background-color: var(--white-1-12);
        }
    }
`;
export const DataForm = styled(FlexFlow.withComponent("form"))``;
export const PersonalDataForm = styled(FlexFlow)``;
export const FormSectionTitle = styled.h3`
    color: var(--white-1);
    font-size: 19px;
    translate: -8px;
`;
export const FormTextField = styled(CustomTextField)`
    gap: 15px;
    label.primary {
        font-size: 16px;
        font-weight: 400;
    }
`;
export const UserDataForm = styled(FlexFlow)``;
export const FormButton = styled(CustomButton)`
    font-size: 23px;
    padding: 10px 46px;
    margin-right: 20px;
`;
