import CustomButton from "src/components/CustomButton/CustomButton";
import styled from "styled-components";

export const ResponsiveButton = styled(CustomButton)`
    padding: 10px 15px;
    background-color: var(--darkblue-2);
    .iconify {
        color: var(--white-1);
        font-size: 20px;
        rotate: -135deg;
    }
    :hover {
        background-color: var(--darkblue-1);
    }
    :disabled {
        background-color: var(--darkblue-6);
    }
`;
export const ResponsiveBackButton = styled(ResponsiveButton)`
    border-radius: 10px 0 0 10px;
    .iconify {
        rotate: -135deg;
    }
`;
export const ResponsiveNextButton = styled(ResponsiveButton)`
    border-radius: 0 10px 10px 0;
    .iconify {
        rotate: 45deg;
    }
`;
