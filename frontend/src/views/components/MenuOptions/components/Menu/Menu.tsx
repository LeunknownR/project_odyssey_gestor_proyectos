import {useState, useEffect} from "react";
import { currentUserLocalStorage } from "src/storage/user.local";
import { Container, Option } from "./styles";
import { MenuProps } from "./types";
import { DBRoles } from "src/config/roles";

const Menu = ({
    show,
    menuPosition,
    onClickEdit,
    onClickDelete,
    onClickDetails
}: MenuProps) => {
    const [currentRole, setCurrentRole] = useState<string | null>(null);
    useEffect(() => {
        const currentRole = currentUserLocalStorage.get();
        setCurrentRole(currentRole.role.id);
    }, []);
    const getClassName = () => {
        const classList: string[] = [];
        show && classList.push("show");
        menuPosition && classList.push(menuPosition);
        return classList.join(" ");
    };
    const className: string = getClassName();
    return (
        <Container className={className}>
            {currentRole === DBRoles.GeneralAdmin ? (
                <>
                    <Option color="var(--dark-1)" onClick={onClickEdit}>
                        Editar
                    </Option>
                    <Option color="var(--red-3)" onClick={onClickDelete}>
                        Eliminar
                    </Option>
                </>
            ) : currentRole === DBRoles.Collaborator && (
                <Option color="var(--dark-1)" onClick={onClickDetails}>
                    Detalle
                </Option>
            )}
        </Container>
    );
};

export default Menu;
