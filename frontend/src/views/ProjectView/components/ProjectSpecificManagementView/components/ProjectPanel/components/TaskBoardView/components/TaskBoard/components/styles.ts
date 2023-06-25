import { ResponsiveBackButton, ResponsiveNextButton } from 'src/views/ProjectView/components/ProjectManagerView/components/NewProjectSection/components/NewProjectModal/components/ResponsiveButtons/styles';
import styled from 'styled-components';

export const PreviousStateButton = styled(ResponsiveBackButton)`
    padding: 15px;
    border-radius: 10px;
    .iconify {
        font-size: 24px;
    }
`;
export const NextStateButton = styled(ResponsiveNextButton)`
    padding: 15px;
    border-radius: 10px;
    .iconify {
        font-size: 24px;
    }
`;