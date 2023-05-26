import UserImage from "src/views/components/UserImage/UserImage";
import { IconWrapper, Item, MainData } from "./styles";
import { ProjectMemberListItemProps } from "./types";
import { Icon } from "@iconify/react/dist/iconify.js";

const ProjectMemberListItem = ({
    memberProject, onRemove
}: ProjectMemberListItemProps) => {
    const { name, surname, urlPhoto } = memberProject;
    return (
        <Item>
            <MainData>
                <UserImage 
                    name={name} surname={surname} 
                    urlPhoto={urlPhoto}
                    className="small"/>
                <span>{memberProject.name} {memberProject.surname}</span>
            </MainData>
            <IconWrapper onClick={onRemove}>
                <Icon icon="mdi:trash-can-outline"/>
            </IconWrapper>
        </Item>
    );
}

export default ProjectMemberListItem;