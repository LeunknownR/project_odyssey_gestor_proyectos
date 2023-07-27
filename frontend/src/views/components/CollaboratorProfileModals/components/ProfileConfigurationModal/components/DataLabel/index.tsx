import { FlexFlow } from "src/components/styles";
import { UserData, UserDataSubtitle } from "./styles";
import { DataLabelProps } from "./types";

const DataLabel = ({ label, data }: DataLabelProps) => {
    return (
        <FlexFlow direction="column" gap="5px">
            <UserDataSubtitle>{label}</UserDataSubtitle>
            <UserData title={data}>{data}</UserData>
        </FlexFlow>
    );
};

export default DataLabel;
