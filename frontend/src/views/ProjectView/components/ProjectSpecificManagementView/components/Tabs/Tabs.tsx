import TabComponent from "./components/TabComponent/TabComponent";
import { FlexFlow } from "src/components/styles";
import { TabsContentProps, TabsProps } from "./types";



const Tabs = ({ projectId }: TabsProps) => {
    const TABS_CONTENT: TabsContentProps[] = [
        {
            name: "Tablero",
            path: `/proyectos/${projectId}/tareas`,
            icon: "fluent:task-list-square-ltr-16-filled",
        },
    ];
    return (
        <FlexFlow>
            {TABS_CONTENT.map((tab, idx) => (
                <TabComponent
                    key={idx}
                    {...tab}
                    lastTab={idx === TABS_CONTENT.length - 1}
                />
            ))}
        </FlexFlow>
    );
};

export default Tabs;
