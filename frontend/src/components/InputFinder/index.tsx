import { InputTextField, CleanChatBtn, Container } from "./styles";
import { InputFinderProps } from "./types";

const InputFinder = ({
    searchInput,
    searchedInput,
    clearSearchedInput,
}: InputFinderProps) => {
    return (
        <Container>
            <InputTextField
                onChange={searchInput}
                value={searchedInput}
                placeholder="¿A quién(es) estás buscando?"
                variant="primary-search"
            />
            {searchedInput && (
                <CleanChatBtn onClick={clearSearchedInput} icon="mdi:close" />
            )}
        </Container>
    );
};

export default InputFinder;
