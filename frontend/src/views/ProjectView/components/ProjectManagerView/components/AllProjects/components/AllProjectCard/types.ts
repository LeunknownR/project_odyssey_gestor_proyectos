import { Project } from "src/entities/project/entities";
import { MenuOption } from "src/views/components/MenuOptions/types";

export type AllProjectCardProps = {
    project: Project;
    options: MenuOption[];
}