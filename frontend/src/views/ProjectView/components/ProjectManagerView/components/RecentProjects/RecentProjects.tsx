import { useRef } from "react";
import { FlexFlow } from "src/components/styles";
import RecentProjectCard from "./components/RecentProjectCard/RecentProjectCard";
import { CardList, Container, Index, ScreenList } from "./styles";
import { RecentProjectsProps } from "./types";
import useSlider from "./utils/hooks/useSlider";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import TitleHeader from "src/views/components/TitleHeader/TitleHeader";

const RecentProjects = ({
    recentProjects,
    setCurrentProject,
    openUpdateProjectModal,
    openDeleteProjectModal,
}: RecentProjectsProps) => {
    const $list = useRef<HTMLDivElement>();
    const { isMobile } = useMainContext();
    const { currentTranslateX, dragging, handler, idxActiveCard } = useSlider(
        $list,
        recentProjects
    );
    return (
        <Container>
            <TitleHeader text="Proyectos recientes" />
            <FlexFlow direction="column" gap="25px" align="center">
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
                    <FlexFlow gap="10px">
                        {recentProjects.map((_, idx) => (
                            <Index
                                key={idx}
                                className={idx === idxActiveCard && "active"}
                            />
                        ))}
                    </FlexFlow>
                )}
            </FlexFlow>
        </Container>
    );
};

export default RecentProjects;
