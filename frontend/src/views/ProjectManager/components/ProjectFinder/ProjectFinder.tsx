import CustomInputSearch from "src/components/CustomInputSearch/CustomInputSearch";

const PROVISIONAL_OPTIONS = [
    {
        id: 1,
        name: "ralf",
    },
];

const ProjectFinder = () => {
    return (
        <CustomInputSearch
            variant="header-search"
            options={PROVISIONAL_OPTIONS}
            onChange={() => console.log("gnomo")}
            fillOptions={() => console.log("hola")}
        />
    );
}

export default ProjectFinder;