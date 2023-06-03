import { Content as TextArea } from 'src/components/CustomTextArea/styles';
import { FlexFlow } from 'src/components/styles';
import styled from 'styled-components';

export const Container = styled(FlexFlow.withComponent("footer"))`
    gap: 12px;
    ${TextArea} {
        background-color: transparent;
        border-color: var(--gray-1);
    }
`;
export const IconContainer = styled.span`
    display: flex;
    .iconify {
        font-size: 30px;
        color: var(--white-1);
    }
`;