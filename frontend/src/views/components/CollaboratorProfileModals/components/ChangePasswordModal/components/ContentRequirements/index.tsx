import { Icon } from "@iconify/react/dist/iconify.js";
import { IndividualRequirement, RequirementsList } from "./styles";
import { ContentRequirementsProps } from "./types";

const ContentRequirements = ({
    passwordValidations,
}: ContentRequirementsProps) => {
    return (
        <RequirementsList>
            <IndividualRequirement className={passwordValidations.minLength ? "validated" : ""}>
                <Icon icon="emojione-monotone:shield" />
                Mínimo ocho caracteres
            </IndividualRequirement>
            <IndividualRequirement className={passwordValidations.containsNumber ? "validated" : ""}>
                <Icon icon="emojione-monotone:shield" />
                Al menos un número
            </IndividualRequirement>
            <IndividualRequirement className={passwordValidations.containsMinus ? "validated" : ""}>
                <Icon icon="emojione-monotone:shield" />
                Al menos una minúscula
            </IndividualRequirement>
            <IndividualRequirement className={passwordValidations.containsMayus ? "validated" : ""}>
                <Icon icon="emojione-monotone:shield" />
                Al menos una mayúscula
            </IndividualRequirement>
        </RequirementsList>
    );
};

export default ContentRequirements;
