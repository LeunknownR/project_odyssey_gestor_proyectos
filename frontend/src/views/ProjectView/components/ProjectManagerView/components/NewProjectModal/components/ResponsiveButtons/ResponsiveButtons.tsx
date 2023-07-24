import { FlexFlow } from "src/components/styles";
import { ResponsiveBackButton, ResponsiveNextButton } from "./styles";
import { ResponsiveButtonsProps } from "./types";

const ResponsiveButtons = ({ tabIdx, toPage }: ResponsiveButtonsProps) => {
    return (
        <FlexFlow>
            <ResponsiveBackButton
                icon="memory:bow-arrow"
                disabled={tabIdx === 0}
                onClick={() => toPage(0)}
            />
            <ResponsiveNextButton
                icon="memory:bow-arrow"
                disabled={tabIdx === 1}
                onClick={() => toPage(1)}
            />
        </FlexFlow>
    );
};

export default ResponsiveButtons;
