import { useRef } from "react";
import { Column, Row } from "src/components/styles";
import TitleHeader from "../../../components/TitleHeader/TitleHeader";
import RecentProjectCard from "./components/RecentProjectCard/RecentProjectCard";
import { CardList, Container, Index, ScreenList } from "./styles";
import { RecentProjectsProps } from "./types";
import useDeviceSize from "src/utils/hooks/useDeviceSize";
import useSlider from "./utils/hooks/useSlider";

const RecentProjects = ({
    recentProjects,
    setCurrentProject,
    openUpdateProjectModal,
    openDeleteProjectModal,
}: RecentProjectsProps) => {
    const $list = useRef<HTMLDivElement>();
    const { isMobile } = useDeviceSize();
    const { currentTranslateX, dragging, handler, idxActiveCard } = useSlider(
        $list,
        recentProjects
    );
    return (
        <Container>
            <TitleHeader text="Proyectos recientes" />
            <Column gap="25px" align="center">
                <ScreenList>
                    <CardList
                        ref={$list}
                        justify="center"
                        currentTranslateX={currentTranslateX}
                        dragging={dragging}
                        onTouchStart={handler.touchStart}
                        onTouchMove={handler.touchMove}
                        onTouchEnd={handler.touchEnd}
                    >
                        {recentProjects.map(project => {
                            return (
                                <RecentProjectCard
                                    key={project.id}
                                    project={project}
                                    setCurrentProject={setCurrentProject}
                                    openUpdateProjectModal={
                                        openUpdateProjectModal
                                    }
                                    openDeleteProjectModal={
                                        openDeleteProjectModal
                                    }
                                />
                            );
                        })}
                    </CardList>
                </ScreenList>
                {isMobile && (
                    <Row gap="10px">
                        {recentProjects.map((_, idx) => (
                            <Index
                                key={idx}
                                className={idx === idxActiveCard && "active"}
                            />
                        ))}
                    </Row>
                )}
            </Column>
        </Container>
    );
};

export default RecentProjects;
