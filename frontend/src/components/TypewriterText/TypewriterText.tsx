import { useEffect, useState } from "react";
import { TypeWriterProps } from "./types";
import { Cursor, Text } from "./styles";

const TypewriterText = ({ text }: TypeWriterProps) => {
    const [displayedText, setDisplayedText] = useState("");
    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            setDisplayedText(prevText => {
                const nextChar = text[currentIndex];
                currentIndex = currentIndex + 1;
                if (currentIndex > text.length - 1)
                    clearInterval(intervalId);
                return prevText + nextChar;
            });
        }, 100);
        return () => clearInterval(intervalId);
    }, [text]);
    return (
        <Text>{displayedText}<Cursor/></Text>
    );
};

export default TypewriterText;
