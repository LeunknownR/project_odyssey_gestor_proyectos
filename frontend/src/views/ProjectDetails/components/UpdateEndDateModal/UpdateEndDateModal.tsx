import { useState, useEffect } from "react";
import Modal from "src/components/Modal/Modal";
import { Content, IconContainer, TitleModal } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Row } from "src/components/styles";
import { UpdateEndDateModalProps } from "./types";
import Footer from "./components/Footer/Footer";
import CustomDatePicker from "src/components/CustomDatePicker/CustomDatePicker";
import { requestUpdateProjectEndDate } from "src/services/projects/relatedToProjects";
import { CardVariant } from "src/components/NotificationCard/types";

const MODAL_STYLES = {
    padding: "20px 30px",
    minWidth: "700px",
};

const UpdateEndDateModal = ({
    modalProps,
    currentEndDate,
    projectId,
    preloader,
    fillProjectDetails,
    notificationCard
}: UpdateEndDateModalProps) => {
    const [endDate, setEndDate] = useState<number>(currentEndDate);
    useEffect(() => {
        if (modalProps.isOpen)
            setEndDate(currentEndDate)
    }, [modalProps.isOpen]);
    const changeEndDateProjectField = (value: number) => {
        setEndDate(value);
    };
    const updateProjectEndDate = async () => {
        modalProps.open(false)
        preloader.show("Actualizando fecha de finalización...");
        const { message } = await requestUpdateProjectEndDate({
            projectId,
            endDate,
        });
        preloader.hide();
        if (message !== "SUCCESS") return;
        fillProjectDetails();
        notificationCard.changeVariant(CardVariant.UpdateDate);
        notificationCard.show();
    };
    const dateIsChanged = (): boolean => {
        return endDate === currentEndDate 
    }
    return (
        <Modal {...modalProps} sizeProps={MODAL_STYLES}>
            {/* <Content> */}
            <Row align="center" gap="10px" justifySelf="flex-start">
                <IconContainer>
                    <Icon icon="iconamoon:attention-square-fill" />
                </IconContainer>
                <TitleModal>ACTUALIZACIÓN DE FECHA DE FINALIZACIÓN</TitleModal>
            </Row>
            <Row justifySelf="flex-start" padding="0 0 0 25px">
                <CustomDatePicker
                    value={endDate}
                    width="200px"
                    onChange={changeEndDateProjectField}
                />
            </Row>
            <Footer
                closeModal={() => modalProps.open(false)}
                updateProjectEndDate={updateProjectEndDate}
                dateIsChanged={dateIsChanged}
            />
            {/* </Content> */}
        </Modal>
    );
};

export default UpdateEndDateModal;
