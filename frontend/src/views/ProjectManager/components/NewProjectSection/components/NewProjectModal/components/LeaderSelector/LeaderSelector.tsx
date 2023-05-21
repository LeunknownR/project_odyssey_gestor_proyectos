import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import { TEXT_FIELD_PROPS } from "src/views/ProjectManager/utils/constants";
import { LeaderSelectorProps } from "./types";
import { ChangeEvent } from "react";

const PROV_OP = [
    {
        id: 1,
        name: "ralf",
    },
];
const LeaderSelector = ({ form }: LeaderSelectorProps) => {
    const { leaderId } = form.value;
    const changeLeaderProjectField = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        form.change(TEXT_FIELD_PROPS.PROJECT_LEADER.name, value);
    };
    return (
        <CustomInputSearch
            {...TEXT_FIELD_PROPS.PROJECT_LEADER}
            options={PROV_OP}
            onChange={() => console.log()}
            fillOptions={() => console.log()}
            // value={leaderId}
        />
    );
};

export default LeaderSelector;
