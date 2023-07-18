import { FlexFlow } from 'src/components/styles';
import { MOBILE_WIDTH } from 'src/config/constants';
import styled from 'styled-components';

export const Content = styled(FlexFlow.withComponent("ul"))`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 20px;
    padding-top: 5px;
    padding-bottom: 10px;
    height: max-content;
    width: 100%;
`;
export const Container = styled(FlexFlow.withComponent("section"))`
    width: 100%;
    @media (max-width: ${MOBILE_WIDTH}px) {
        ${Content} {
            padding: 0 10px;
        }
    }
`;