import { FlexFlow } from 'src/components/styles';
import styled from 'styled-components';

export const RequirementsList = styled(FlexFlow.withComponent("ul"))`
    flex-direction: column;
    gap: 5px;
    min-width: 160px;
`;
export const IndividualRequirement = styled(FlexFlow.withComponent("li"))`
    color: var(--red-2);
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    gap: 7px;
    .iconify {
        font-size: 15px;
    }
`;