import { Icon } from "@iconify/react/dist/iconify.js";
import NewProjectModal from "./components/NewProjectModal/NewProjectModal";
import { NewProjectButton } from "./styles";
import { NewProjectSectionProps } from "./types";
import { DBRoles } from "src/config/roles";
import useUserRole from "src/storage/hooks/useUserRole";

const NewProjectSection = ({
    modal,
    form,
    getProjectFromForm
}: NewProjectSectionProps) => {
    const userRole = useUserRole();
    if (userRole !== DBRoles.GeneralAdmin)
        return null;
    return (
        <>
        <NewProjectButton 
            onClick={() => modal.open(true)}>
            <span>
                <Icon icon="mdi:layers-plus"/>
            </span>
        </NewProjectButton>
        <NewProjectModal modalProps={modal} form={form} getProjectFromForm={getProjectFromForm}/>
        </>
    );
}

export default NewProjectSection;