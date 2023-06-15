import styled from "styled-components";

type FlexFlowProps = {
    justify?: string;
    direction?: string;
    flexWrap?: string;
    align?: string;
    alignSelf?: string;
    justifySelf?: string;
    gap?: string;
    padding?: string;
    margin?: string;
    width?: string;
    height?: string;
    wrap?: string;
    position?: string;
};
export const FlexFlow = styled.div<FlexFlowProps>`
    display: flex;
    flex-direction: ${({ direction = "row" }) => direction};
    flex-wrap: ${({ flexWrap = "nowrap" }) => flexWrap};
    justify-content: ${({ justify = "normal" }) => justify};
    justify-self: ${({ justifySelf = "unset" }) => justifySelf};
    align-items: ${({ align = "normal" }) => align};
    align-self: ${({ alignSelf = "unset" }) => alignSelf};
    gap: ${({ gap = "unset" }) => gap};
    padding: ${({ padding = "unset" }) => padding};
    margin: ${({ margin = "unset" }) => margin};
    height: ${({ height = "unset" }) => height};
    width: ${({ width = "unset" }) => width};
    position: ${({ position = "static" }) => position};
`;
