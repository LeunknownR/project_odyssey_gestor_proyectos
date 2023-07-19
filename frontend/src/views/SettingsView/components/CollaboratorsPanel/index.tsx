import { useEffect } from "react";
import Paginator from "src/components/Paginator/Paginator";
import { FAKE_DATA } from "../../mock";
import CollaboratorList from "./components/CollaboratorList";
import PanelHeader from "./components/PanelHeader";
import { Container } from "./styles";
import usePaginator from "src/components/Paginator/utils/hooks/usePaginator";

const CollaboratorsPanel = () => {
    const paginator = usePaginator();
    const movePage = (page: number) => {
        paginator.movePage(page);
        // paymentHistory.doFill();
    };
    useEffect(() => {
        paginator.setQuantityPages(20, 1);
    }, []);
    return (
        <Container direction="column" gap="30px">
            <PanelHeader />
            <CollaboratorList collaboratorList={FAKE_DATA.collaboratorList} />
            <Paginator
                data={paginator.data}
                color="var(--white-1)"
                changeData={page => {
                    if (page === paginator.data.currentPage) return;
                    movePage(page);
                }}
            />
        </Container>
    );
};

export default CollaboratorsPanel;
