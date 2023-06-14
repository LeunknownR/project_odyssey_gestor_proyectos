import TabComponent from "./components/TabComponent/TabComponent";
import { FlexFlow } from "src/components/styles";
import { TabsProps } from "./types";



const Tabs = ({ projectId }: TabsProps) => {
    //GNOMO CREO QUE SE PEUDE HACER MEJOR
    const TABS_CONTENT = [
        {
            name: "Tablero",
            path: `/proyectos/${projectId}/tareas`,
        },
        {
            name: "Cronograma",
            path: `/proyectos/${projectId}/cronograma`,
        },
        {
            name: "Salas de chat",
            path: `/proyectos/${projectId}/salas-chat`,
        },
    ];
    return (
        <FlexFlow gap="20px">
            {TABS_CONTENT.map(({ name, path }, idx) => (
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
