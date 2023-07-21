import { Separator, Tab } from "./styles";
import { TabComponentProps } from "./types";

const TabComponent = ({ name, path, lastTab }: TabComponentProps) => {
    return (
        <>
        <Tab to={path} activeclassname="active">{name}</Tab>
        {!lastTab && <Separator>|</Separator>}
        </>
    );
};

export default TabComponent;
