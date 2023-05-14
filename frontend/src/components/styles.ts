import styled from 'styled-components';

type StyleProps = {
    justify?: string;
    align?: string
    alignSelf?: string;
    gap?: string;
    padding?: string;
    margin?: string;
    width?: string;
    height?: string;
    wrap?: string;
    position?: string;
}
export const Row = styled.div<StyleProps>`
    display: flex;
    justify-content: ${({ justify = "normal" }) => justify};
    align-items: ${({ align = "normal" }) => align};
    align-self: ${({ alignSelf = "unset" }) => alignSelf};
    gap: ${({ gap = "unset" }) => gap};
    padding: ${({ padding = "unset" }) => padding};
    margin: ${({ margin = "unset" }) => margin};
    width: ${({ width = "unset" }) => width};
    height: ${({ height = "unset" }) => height};
    flex-wrap: ${({ wrap = "unset" }) => wrap};
    position: ${({ position = "static" }) => position};
`;
export const Column = styled.div<StyleProps>`
    display: flex;
    flex-direction: column;
    justify-content: ${({ justify = "normal" }) => justify};
    align-items: ${({ align = "normal" }) => align};
    align-self: ${({ alignSelf = "unset" }) => alignSelf};
    gap: ${({ gap = "unset" }) => gap};
    padding: ${({ padding = "unset" }) => padding};
    margin: ${({ margin = "unset" }) => margin};
    height: ${({ height = "unset" }) => height};
    width: ${({ width = "unset" }) => width};
    position: ${({ position = "static" }) => position};
`;