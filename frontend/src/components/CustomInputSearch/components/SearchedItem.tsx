import { Container, Image, Name } from "./styles";
import { SearchedItemProps } from "./types";

const SearchedItem = ({ name, surname, urlPhoto, onClick }: SearchedItemProps) => {
    return (
        <Container onClick={onClick}>
            <Image />
            <Name>{name} {surname}</Name>
        </Container>
    );
};

export default SearchedItem;
