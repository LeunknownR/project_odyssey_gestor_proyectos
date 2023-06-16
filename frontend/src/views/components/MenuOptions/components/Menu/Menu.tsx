import { Icon } from "@iconify/react/dist/iconify.js";
import { Container, OptionLink, Option } from "./styles";
import { MenuProps } from "./types";

const Menu = ({
    className,
    options
}: MenuProps) => {
    return (
        <Container className={className}>
            {options.map(({
                text, icon, color,
                onClick, to
            }, idx) => {
                const content = (
                    <>
                        {icon && <Icon icon={icon}/>}
                        <span>{text}</span>
                    </>
                );
                if (to) 
                    return (
                        <OptionLink 
                            key={idx} 
                            color={color}
                            to={to}>
                            {content}
                        </OptionLink>
                    )
                return (
                    <Option 
                        key={idx}
                        color={color}  
                        onClick={onClick}>
                        {content}
                    </Option>
                );
            })}
        </Container>
    );
};

export default Menu;
