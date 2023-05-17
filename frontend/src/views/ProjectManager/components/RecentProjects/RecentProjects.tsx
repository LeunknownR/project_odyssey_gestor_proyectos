import TitleHeader from "../TitleHeader/TitleHeader";
import RecentProjectCard from "./components/RecentProjectCard/RecentProjectCard";
import { CardList, Container } from "./styles";
const test = [1, 2, 3];
const RecentProjects = () => {
    return (
        <Container>
            <TitleHeader text="Proyectos recientes" />
            <CardList>
                {test.map((_, idx) => {
                    return <RecentProjectCard key={idx}/>
                })}
            </CardList>
        </Container>
    );
};

export default RecentProjects;
