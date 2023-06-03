import { AbsolutePaths } from "src/config/absolutePaths";
import TabComponent from "./components/TabComponent/TabComponent";
import { FlexFlow } from "src/components/styles";

const TABS_CONTENT = [
    {
        name: "Tablero",
        path: AbsolutePaths.TaskManager,
    },
    {
        name: "Cronograma",
        path: AbsolutePaths.Timeline,
    },
    {
        name: "Salas de chat",
        path: AbsolutePaths.Chats,
    },
];

const Tabs = () => {
    return (
        <FlexFlow gap="20px">
            {TABS_CONTENT.map(({name, path}, idx) => (
                <TabComponent
                    key={idx}
                    name={name}
                    path={path}
                    lastTab={idx === TABS_CONTENT.length - 1}
                />
            ))}
        </FlexFlow>
    );
};

export default Tabs;
