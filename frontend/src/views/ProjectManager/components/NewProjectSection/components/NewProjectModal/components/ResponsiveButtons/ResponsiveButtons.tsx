import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Wrapper } from "./styles";
import { ResponsiveButtonsProps } from "./types";

const ResponsiveButtons = ({ tabIdx, toPage }: ResponsiveButtonsProps) => {
    return (
        <Wrapper>
            <Button className="back" disabled={tabIdx === 0} onClick={() => toPage(0)}>
                <Icon icon="memory:bow-arrow" />
            </Button>
            <Button className="next" disabled={tabIdx === 1} onClick={() => toPage(1)}>
                <Icon icon="memory:bow-arrow" />
            </Button>
        </Wrapper>
    );
};

export default ResponsiveButtons;
