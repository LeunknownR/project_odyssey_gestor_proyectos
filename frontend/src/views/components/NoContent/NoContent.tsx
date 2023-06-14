//#region Styles
import { 
    Container,
    Image,
    Title,
    Subtitle
} from './styles';
//#endregion
//#region Types
import NoContentProps from './types';
//#endregion

const NoContent = ({
    imageWidth,
    img, title, 
    subtitle, titleColor, 
    size
}: NoContentProps) => {
    const getClassName = (): string => {
        const classList: string[] = [];
        size && classList.push(size);
        imageWidth && classList.push("custom-size");
        return classList.join(" ");
    }
    const className: string = getClassName();
    return (
        <Container>
            <Image 
                width={imageWidth} 
                src={img} alt="Imagen cuando no hay contenido" 
                className={className}/>
            <Title 
                className={className} 
                color={titleColor}>{title}</Title>
            <Subtitle className={className} color={titleColor}>{subtitle}</Subtitle>
        </Container>
    );
};

export default NoContent;