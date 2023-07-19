import { Container } from "./styles";
import { PageItemProps } from "./types";

const PageItem = ({
    page,
    selected,
    changeCurrentPage,
    color,
}: PageItemProps) => {
    return (
        <Container
            className={selected ? "selected" : ""}
            color={color}
            onClick={() => changeCurrentPage(page)}
        >
            <span>{page}</span>
        </Container>
    );
};

export default PageItem;
