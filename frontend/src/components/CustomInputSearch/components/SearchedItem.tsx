import { Container, Name } from "./styles";
import { SearchedItemProps } from "./types";

const SearchedItem = ({ item, onClick }: SearchedItemProps) => {
    return (
        <Container onClick={onClick}>
            {item.content}
            {item.text && <Name>{item.text}</Name>}
        </Container>
    );
};

export default SearchedItem;
