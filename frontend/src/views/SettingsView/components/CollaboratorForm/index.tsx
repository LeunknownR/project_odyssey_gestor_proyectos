import CustomButton from "src/components/CustomButton/CustomButton";
import {
    CloseFormBtn,
    Container,
    DataForm,
    FormButton,
    FormSectionTitle,
    FormTextField,
    PersonalDataForm,
    UserDataForm,
} from "./styles";
import { TEXT_FIELD_PROPS } from "./utils/constants";
import { FlexFlow } from "src/components/styles";
import PhotoUploader from "src/components/PhotoUploader";

const CollaboratorForm = () => {
    return (
        <>
            <CloseFormBtn
                onClick={() => console.log("gnomo")}
                icon="material-symbols:close"
            />
            <Container justify="center" align="center" gap="80px">
                <PhotoUploader name="Ralf" surname="Carrasco" urlPhoto={null} />
                <DataForm direction="column" gap="40px">
                    <PersonalDataForm direction="column" gap="18px">
                        <FormSectionTitle>Datos personales</FormSectionTitle>
                        <FormTextField
                            {...TEXT_FIELD_PROPS.COLLABORATOR_NAME}
                        />
                        <FormTextField
                            {...TEXT_FIELD_PROPS.COLLABORATOR_SURNAME}
                        />
                        <FormTextField
                            {...TEXT_FIELD_PROPS.COLLABORATOR_EMAIL}
                        />
                    </PersonalDataForm>
                    <UserDataForm direction="column" gap="20px">
                        <FormSectionTitle>Datos del usuario</FormSectionTitle>
                        <FlexFlow gap="18px">
                            <FormTextField
                                {...TEXT_FIELD_PROPS.COLLABORATOR_USER}
                            />
                            <FormTextField
                                {...TEXT_FIELD_PROPS.COLLABORATOR_PASSWORD}
                            />
                        </FlexFlow>
                    </UserDataForm>
                    <FormButton
                        onClick={() => console.log("GNOMO")}
                        content="Crear"
                        variant="main"
                        alignSelf="flex-end"
                    />
                </DataForm>
            </Container>
        </>
    );
};

export default CollaboratorForm;
