import CustomButton from 'src/components/CustomButton/CustomButton';
import { FlexFlow } from 'src/components/styles';
import { MOBILE_WIDTH } from 'src/config/constants';
import { ResponsiveBackButton, ResponsiveNextButton } from 'src/views/ProjectView/components/ProjectManagerView/components/NewProjectModal/components/ResponsiveButtons/styles';
import styled from 'styled-components'; 

export const Container = styled(FlexFlow.withComponent("footer"))`
    justify-content: flex-end;
    @media (max-width: ${MOBILE_WIDTH}px) {
        order: 2;
        justify-content: space-between;
        gap: 20px;
    }
`;
export const BackButton = styled(ResponsiveBackButton)`
    border-radius: 10px;
    padding: 10px 13px;
    .iconify {
        font-size: 21px;
    }
`;
export const NextButton = styled(ResponsiveNextButton)`
    border-radius: 10px;
    padding: 10px 13px;
    .iconify {
        font-size: 21px;
    }
`;
export const FormButton = styled(CustomButton)`
    font-size: 23px;
    padding: 10px 46px;
    margin-right: 20px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        min-width: 141px;
        font-size: 20px;
        padding: 10px 25px;
        margin-right: 0;
    }
`;
