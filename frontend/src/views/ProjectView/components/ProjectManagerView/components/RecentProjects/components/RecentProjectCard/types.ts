import { Project } from "src/entities/project/entities";
import { MenuOption } from "src/views/components/MenuOptions/types";

export type RecentProjectCardProps = {
    project: Project;
    options: MenuOption[];
}