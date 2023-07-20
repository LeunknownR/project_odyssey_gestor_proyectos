import NavigateButton from "./componentes/NavigateButton/NavigateButton";
import PageItem from "./componentes/PageItem/PageItem";
import { Container, Content, MorePages } from "./styles";
import PaginatorType from "./types";

const Paginator = ({ data, changeData, color }: PaginatorType) => {
    const { currentPage, quantityPages } = data;
    const changeCurrentPage = (value: number) => {
        if (value < 1 || value > quantityPages) return;
        changeData(value);
    };
    if (quantityPages < 2) return null;
    return (
        <Container>
            <NavigateButton
                firstOrLast={currentPage === 1}
                changeCurrentPage={() => {
                    changeCurrentPage(currentPage - 1);
                }}
            />
            <Content>
                {quantityPages > 5 && currentPage >= 5 && (
                    <>
                        <PageItem
                            page={1}
                            selected={currentPage === 1}
                            changeCurrentPage={changeCurrentPage}
                            color={color}
                        />
                        <MorePages>...</MorePages>
                    </>
                )}
                {Array(quantityPages <= 5 ? quantityPages : 5)
                    .fill(0)
                    .map((_, idx) => {
                        let page = idx + 1;
                        if (quantityPages >= 6 && currentPage >= 5) {
                            if (currentPage < quantityPages - 3)
                                page += currentPage - 3;
                            else page += quantityPages - 5;
                        } else if (currentPage > 4) {
                            if (currentPage < quantityPages - 3)
                                page += currentPage - 1;
                            else page += quantityPages - 0;
                        }
                        return (
                            <PageItem
                                key={idx}
                                page={page}
                                selected={currentPage === page}
                                changeCurrentPage={changeCurrentPage}
                                color={color}
                            />
                        );
                    })}
                {quantityPages > 5 && quantityPages - currentPage > 3 && (
                    <>
                        <MorePages>...</MorePages>
                        <PageItem
                            page={quantityPages}
                            selected={currentPage === quantityPages}
                            changeCurrentPage={changeCurrentPage}
                            color={color}
                        />
                    </>
                )}
            </Content>
            <NavigateButton
                firstOrLast={currentPage === quantityPages}
                next
                changeCurrentPage={() => {
                    changeCurrentPage(currentPage + 1);
                }}
            />
        </Container>
    );
};

export default Paginator;
