import { FlexFlow } from "src/components/styles";
import { ChangeStateSectionButtonsProps } from "./types";
import { ResponsiveBackButton, ResponsiveNextButton } from "src/views/ProjectView/components/ProjectManagerView/components/NewProjectSection/components/NewProjectModal/components/ResponsiveButtons/styles";

const ChangeStateSectionButtons = ({
    stateIdx,
    prevStateSection,
    nextStateSection
}: ChangeStateSectionButtonsProps) => {
    return (
        <FlexFlow gap="0" justify="center">
            <ResponsiveBackButton
                icon="memory:bow-arrow"
                disabled={stateIdx === 0}
                onClick={prevStateSection}
            />
            <ResponsiveNextButton
                icon="memory:bow-arrow"
                disabled={stateIdx === 2}
                onClick={nextStateSection}
            />
        </FlexFlow>
    );
};

export default ChangeStateSectionButtons;
