import Modal from "src/components/Modal/Modal";
import { AddMembersChangesModalProps } from "./types";
import { BodyWrapper, IconContainer, IconText, NewMemberIcon } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "./components/Footer/Footer";
import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";
import Header from "./components/Header/Header";
import useSearchCollaborator from "src/views/ProjectManager/utils/hooks/useSearchCollaborator";
import { requestSearchCollaboratorToBeMemberForCollaborator } from "src/services/collaborators/relatedToCollaborators";

const testModalStyles = {
    padding: "0px",
    minWidth: "600px",
};
const PROVISIONAL_OPTIONS = [
    {
        id: 1,
        name: "asdasd",
    },
];
const AddMembersModal = ({ modalProps, preloader }: AddMembersChangesModalProps) => {
    const selectProjectLeaderHandler = useSearchCollaborator({
        requestSearchCollaborators: async (value: string) => {
            preloader.show("Buscando colaboradores...")
            const { data } = await requestSearchCollaboratorToBeMemberForCollaborator(value);
            preloader.hide();
            return data;
        },
    });
    const addMemberToProject = () => {
        console.log("agregnado");
    };
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <Header />
            <BodyWrapper>
                {/* <CustomInputSearch
                    label="Miembros del proyecto"
                    placeholder="Ejm: Ral"
                    variant="primary-search"
                    options={PROVISIONAL_OPTIONS}
                    onChange={() => console.log()}
                    getSearchedItemToShow={}
                    selectOption={}
                    value=""
                /> */}
                <NewMemberIcon>
                    <IconContainer>
                        <Icon icon="mdi:user-add" />
                    </IconContainer>
                    <IconText>Elija un nuevo miembro para el proyecto</IconText>
                </NewMemberIcon>
            </BodyWrapper>
            <Footer
                closeModal={() => modalProps.open(false)}
                addMemberToProject={addMemberToProject}
            />
        </Modal>
    );
};

export default AddMembersModal;
