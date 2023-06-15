import { Icon } from "@iconify/react/dist/iconify.js";
import NewProjectModal from "./components/NewProjectModal/NewProjectModal";
import { NewProjectSectionProps } from "./types";
import { DBRoles } from "src/config/roles";
import useUserRole from "src/storage/hooks/useUserRole";
import { NewProjectButton } from "./styles";

const NewProjectSection = ({
    preloader,
    modal,
    form,
    getProjectFromForm,
    fillProjects,
    notificationCard,
    openCreateProjectModal
}: NewProjectSectionProps) => {
    const userRole = useUserRole();
    if (userRole !== DBRoles.GeneralAdmin) return null;
    return (
        <>
            <NewProjectButton 
                to="" 
                activeclassname="active" 
                onClick={openCreateProjectModal}>
                <span>
                    <Icon icon="mdi:layers-plus" />
                </span>
            </NewProjectButton>
            <NewProjectModal
                preloader={preloader}
                modalProps={modal}
                form={form}
                getProjectFromForm={getProjectFromForm}
                fillProjects={fillProjects}
                notificationCard={notificationCard}
            />
        </>
    );
};

export default NewProjectSection;
