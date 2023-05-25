import { Container, Image, Name } from "./styles";
import { SearchedItemProps } from "./types";

const SearchedItem = ({ item, onClick }: SearchedItemProps) => {
    return (
        <Container onClick={onClick}>
            <Image />
            <Name>{item.text}</Name>
        </Container>
    );
};

export default SearchedItem;
