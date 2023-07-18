import styled, { keyframes } from "styled-components";

const animationText = keyframes`
    to {
        transform: translate(-50%, calc(-50% - 30%));
    }
`;
const Text = styled.div`
    font-size: 40px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    animation: linear ${animationText} 0.9s infinite alternate-reverse;
    transform: translate(-50%, calc(-50% + 30%));
    color: var(--green-1);
`;

const OnDevelopment = () => {
    return (
        <>
        <Text>En desarrollo...</Text>
        </>
    );
}

export default OnDevelopment;