import { ReactElement, useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { SUBMODULES_VIEWS } from "./constants";
import { AbsolutePaths } from "src/config/absolutePaths";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import { Container } from "./styles";
import Preloader from "src/components/Preloader/Preloader";
import usePreloader from "src/components/Preloader/utils/hooks/usePreloader";
import { isPositiveNumber } from "src/utils/numbers";

const ProjectSpecificManagerView = () => {
    //#region States
    const [routes, setRoutes] = useState<ReactElement[] | null>(null);
    const [showRoutes, setShowRoutes] = useState<boolean>(false);
    //#endregion
    const params = useParams();
    const navigate = useNavigate();
    const preloader = usePreloader();
    //#region Effects
    useEffect(() => {
        if (!isPositiveNumber(params.projectId)) {
            navigate(AbsolutePaths.Projects);
            return;
		}
        const projectIdValue = Number(params.projectId);
        setShowRoutes(true);
        fillRoutes(projectIdValue);
    }, []);
    const fillRoutes = (projectId: number) => {
        setRoutes(SUBMODULES_VIEWS.map(({
            key, path, View
        }) => (
            <Route
                key={key}
                path={path}
                element={<View preloader={preloader} projectId={projectId}/>}/>
        )));
    }
    if (!showRoutes)
		return null;
    //#endregion
    return (
        <>
        <SidebarMenu />
        <Container>
            <Routes>
                {routes}
                {routes !== null &&
                <Route
                    path="*"
                    element={<Navigate to={AbsolutePaths.Projects} replace/>}
                />}
            </Routes>
        </Container>
        <Preloader {...preloader.value} />
        </>
    );
}

export default ProjectSpecificManagerView;
