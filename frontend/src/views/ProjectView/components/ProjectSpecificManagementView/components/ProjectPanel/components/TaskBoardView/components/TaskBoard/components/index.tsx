import { FlexFlow } from "src/components/styles";
import { NextStateButton, PreviousStateButton } from "./styles";
import { ChangeStateSectionButtonsProps } from "./types";

const ChangeStateSectionButtons = ({
    stateIdx,
    prevStateSection,
    nextStateSection
}: ChangeStateSectionButtonsProps) => {
    return (
        <FlexFlow gap="25px" justify="center">
            <PreviousStateButton
                icon="memory:bow-arrow"
                disabled={stateIdx === 0}
                onClick={prevStateSection}
            />
            <NextStateButton
                icon="memory:bow-arrow"
                disabled={stateIdx === 2}
                onClick={nextStateSection}
            />
        </FlexFlow>
    );
};

export default ChangeStateSectionButtons;
