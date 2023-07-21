import { FlexFlow } from "src/components/styles";
import { UserDataModal, UserDataSubtitle } from "./styles";
import { DataLabelProps } from "./types";

const DataLabel = ({ label, data }: DataLabelProps) => {
    return (
        <FlexFlow direction="column" gap="5px">
            <UserDataSubtitle>{label}</UserDataSubtitle>
            <UserDataModal>{data}</UserDataModal>
        </FlexFlow>
    );
};

export default DataLabel;
