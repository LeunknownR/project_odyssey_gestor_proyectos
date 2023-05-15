import { useState, useEffect, useRef } from "react";
import UserImage from "./components/UserImage/UserImage";
import UserOptions from "./components/UserOptions/UserOptions";
import { Container } from "./styles";

const User = () => {
    //GNOMO jaja puse are en vez de is jeje
    const [areOptionsOpen, setAreOptionsOpen] = useState(false);
    const $optionsRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!($optionsRef.current as HTMLDivElement).contains(event.target as Node))
                setAreOptionsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const toggleOptions = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setAreOptionsOpen(prev => !prev);
    };
    return (
        <Container>
            <UserImage onClick={toggleOptions} isClickable />
            <UserOptions isOpen={areOptionsOpen} ref={$optionsRef} />
        </Container>
    );
};

export default User;
