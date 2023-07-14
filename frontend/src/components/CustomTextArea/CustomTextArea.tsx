import { ChangeEventHandler, useEffect, useRef } from "react";
import { Container, Content, LabelContent, MaxLength, TextArea } from "./styles";
import { CustomTextAreaProps } from "./types";

const CustomTextArea = ({
    className, placeholder,
    label, variant,
    maxLength, size,
    width, maxWidth, disabled = false,
    value, onChange, onBlur,
    characterCounter = true,
    onKeyDown, maxHeightExpand = null
}: CustomTextAreaProps) => {
    const containerRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (!containerRef.current) return;
        containerRef.current.style.height = containerRef.current.scrollHeight + "px";
    }, [containerRef]);
    const getClassName = () => {
        const classList: string[] = [];
        className && classList.push(className)
        disabled && classList.push("disabled");
        size && classList.push(size);
        variant && classList.push(variant);
        return classList.join(" ");
    };
    const classNameFull: string = getClassName();
    const changeValue: ChangeEventHandler<HTMLTextAreaElement> = e => {
        onChange(e);
        if (!maxHeightExpand || !containerRef.current) return;
        const $element = containerRef.current;
        $element.style.height = "auto";
        const { scrollHeight } = $element;
        const newHeight: number = Math.min(scrollHeight, maxHeightExpand);
        $element.style.height = newHeight + "px";
    }
    return (
        <Container 
            width={width} maxWidth={maxWidth} className={classNameFull}>
            {label && (
                <LabelContent className={classNameFull}>{label}</LabelContent>
            )}
            <Content className={classNameFull}>
                <TextArea
                    ref={containerRef}
                    rows={1}
                    className={classNameFull}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    onChange={changeValue}
                    onKeyDown={onKeyDown}
                    onBlur={onBlur}/>
                {(characterCounter && !disabled) && <MaxLength>{value.length} / {maxLength}</MaxLength>}
            </Content>
        </Container>
    );
};

export default CustomTextArea;
