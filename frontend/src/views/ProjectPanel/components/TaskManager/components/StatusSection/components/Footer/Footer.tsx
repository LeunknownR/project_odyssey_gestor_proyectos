import CustomButton from "src/components/CustomButton/CustomButton";

const Footer = () => {
    return (
        <CustomButton
            onClick={() => console.log("asd")}
            content="Agregar tarea"
            icon="material-symbols:add"
            padding="10px"
        />
    );
};

export default Footer;
