import { Icon } from "@iconify/react/dist/iconify.js";
import { IndividualRequirement, RequirementsList } from "./styles";
import { REQUIREMENTS } from "./utils/constants";
import { ContentRequirementsProps } from "./types";

const ContentRequirements = ({
    passwordValidations,
}: ContentRequirementsProps) => {
    return (
        <RequirementsList>
            {REQUIREMENTS.map(({ text, name }, idx) => (
                <IndividualRequirement key={idx} className={passwordValidations[name] ? "validated" : ""}>
                    <Icon icon="emojione-monotone:shield" />
                    {text}
                </IndividualRequirement>
            ))}
        </RequirementsList>
    );
};

export default ContentRequirements;
