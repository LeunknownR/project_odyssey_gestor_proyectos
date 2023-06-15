import styled from 'styled-components';
import { FlexFlow } from 'src/components/styles';
import { Content as TextAreaContent } from 'src/components/CustomTextArea/styles';

export const Container = styled(FlexFlow.withComponent("footer"))`
    position: fixed;
    bottom: 0;
    width: 100%;
    gap: 12px;
    background-color: #051E2F;
    padding: 20px 30px;
    ${TextAreaContent} {
        background-color: transparent;
        border-color: var(--gray-1);
        textarea {
            min-height: 40px;
            padding: 10px 20px 0;
        }
    }
`;
export const IconContainer = styled.span`
    display: flex;
    cursor: pointer;
    .iconify {
        font-size: 30px;
        color: var(--white-1);
    }
`;