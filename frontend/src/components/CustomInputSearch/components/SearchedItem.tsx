import { Container, Name } from "./styles";
import { SearchedItemProps } from "./types";

const SearchedItem = ({ item, onSelect }: SearchedItemProps) => {
    return (
        <Container onMouseDown={onSelect}>
            {item.content}
            {item.text && <Name>{item.text}</Name>}
        </Container>
    );
};

export default SearchedItem;
