import styled from 'styled-components';
import { FlexFlow } from 'src/components/styles';
import { Content as TextAreaContent } from 'src/components/CustomTextArea/styles';
import { MOBILE_WIDTH } from 'src/config/constants';
import CustomTextArea from 'src/components/CustomTextArea/CustomTextArea';
import CustomButton from 'src/components/CustomButton/CustomButton';

export const Container = styled(FlexFlow.withComponent("footer"))`
    position: sticky;
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
    @media (max-width: ${MOBILE_WIDTH}px) {
        background-color: var(--darkblue-3);
        padding: 20px 18px;
    }
`;
export const CommentInput = styled(CustomTextArea)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        min-height: unset;
        span {
            display: none;
        }
        &:focus-within {
            span {
                display: inline;
            }
        }
    }
`;
export const SendCommentButton = styled(CustomButton)`
    background: transparent;
    .iconify {
        font-size: 30px;
        color: var(--white-1);
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