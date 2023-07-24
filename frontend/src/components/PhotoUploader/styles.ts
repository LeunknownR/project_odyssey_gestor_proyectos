import styled from "styled-components";
import { FlexFlow } from "../styles";
import CustomButton from "../CustomButton/CustomButton";
import UserImage from "src/views/components/UserImage/UserImage";
import { MOBILE_WIDTH } from "src/config/constants";

export const Container = styled(FlexFlow)`
    position: relative;
    align-self: flex-start;
`;
export const DeleteImageBtn = styled(CustomButton)`
    background: transparent;
    padding: 0;
    color: var(--red-2);
    position: absolute;
    right: 15px;
    .iconify {
        border-radius: 50%;
        padding: 5px;
        font-size: 33px;
        background-color: var(--darkblue-3);
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        right: -1px;
        .iconify {
            background-color: var(--darkblue-4);
            font-size: 29px;
        }
    }
`;
export const CollaboratorImage = styled(UserImage)`
    font-size: 55px;
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 40px;
    }
`;
export const UploadBtn = styled(CustomButton)`
    background-color: transparent;
    color: var(--darkblue-0);
    font-weight: 700;
    font-size: 18px;
    align-items: center;
    padding: 0;
    :hover {
        color: var(--white-1);
    }
    .iconify {
        display: flex;
        font-size: 32px;
    }
    @media (max-width: ${MOBILE_WIDTH}px) {
        font-size: 15px;
        gap: 6px;
        .iconify {
            font-size: 22px;
        }
    }
`;
