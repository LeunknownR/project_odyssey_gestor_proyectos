import { ResponsiveBackButton, ResponsiveNextButton, Wrapper } from "./styles";
import { ResponsiveButtonsProps } from "./types";

const ResponsiveButtons = ({ tabIdx, toPage }: ResponsiveButtonsProps) => {
    return (
        <Wrapper>
            <ResponsiveBackButton icon="memory:bow-arrow" disabled={tabIdx === 0} onClick={() => toPage(0)}/>
            <ResponsiveNextButton icon="memory:bow-arrow" disabled={tabIdx === 1} onClick={() => toPage(1)}/>
        </Wrapper>
    );
};

export default ResponsiveButtons;
