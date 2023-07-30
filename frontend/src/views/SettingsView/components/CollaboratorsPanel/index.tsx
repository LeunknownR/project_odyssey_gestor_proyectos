import Paginator from "src/components/Paginator/Paginator";
import CollaboratorList from "./components/CollaboratorList";
import PanelHeader from "./components/PanelHeader";
import { Container } from "./styles";
import { CollaboratorsPanelProps } from "./types";

const CollaboratorsPanel = ({ paginator, doTriggerFillingRequest }: CollaboratorsPanelProps) => {
    const movePage = (page: number) => {
        paginator.movePage(page);
        doTriggerFillingRequest();
    };
    return (
        <Container direction="column" gap="30px">
            <PanelHeader />
            <CollaboratorList />
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
