import { Icon } from "@iconify/react/dist/iconify.js";
import { IconContainer, Separator, Tab } from "./styles";
import { TabComponentProps } from "./types";

const TabComponent = ({ name, path, icon, lastTab }: TabComponentProps) => {
    return (
        <>
        <Tab to={path} activeclassname="active">
            <IconContainer>
                <Icon icon={icon} />
            </IconContainer>
            {name}
        </Tab>
        {!lastTab && (
            <Separator>
                <Icon icon="fluent:divider-short-24-filled" />
            </Separator>
        )}
        </>
    );
};

export default TabComponent;
