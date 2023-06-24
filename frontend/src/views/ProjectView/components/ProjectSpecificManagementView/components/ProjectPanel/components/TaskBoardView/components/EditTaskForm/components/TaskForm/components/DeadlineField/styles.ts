import { FlexFlow } from "src/components/styles";
import { MOBILE_WIDTH } from "src/config/constants";
import { Container as DatePicker } from "src/components/CustomDatePicker/styles";
import { Container as DatePickerLabel } from "src/components/CustomDatePicker/components/InputDate/styles"
import styled from "styled-components";

export const Container = styled(FlexFlow)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 5px;
    }
`;
export const Content = styled(FlexFlow)`
    @media (max-width: ${MOBILE_WIDTH}px) {
        gap: 5px;
    }
    ${DatePicker} {
        @media (max-width: ${MOBILE_WIDTH}px) {
            width: 160px;
        }
    }
    ${DatePickerLabel} {
        @media (max-width: ${MOBILE_WIDTH}px) {
            padding: 5px 7px;
        }
    }
    ${DatePickerLabel} span {
        @media (max-width: ${MOBILE_WIDTH}px) {
            font-size: 12px;
        }
    }
`;
