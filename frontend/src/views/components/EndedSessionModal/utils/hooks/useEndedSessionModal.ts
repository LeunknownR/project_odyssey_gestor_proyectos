import useModal from "src/components/Modal/utils/hooks/useModal";
import { EndedSessionModalHandler } from "./types";
import { useState } from "react";

const useEndedSessionModal = (): EndedSessionModalHandler => {
    const modal = useModal();
    const [content, setContent] = useState<string>("");
    const open = (newContent: string): void => {
        setContent(newContent);
        modal.open(true);
    }
    return {
        value: {
            content, modal
        }, open
    };
}

export default useEndedSessionModal;