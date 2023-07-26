import { getUrlImage } from "src/config/helpers";
import { BackendImageProps } from "../../types";
import { Image } from "../../styles";

const BackendImage = ({
    className,
    onClick,
    path,
    isDynamic = true,
}: BackendImageProps) => {
    const directory = isDynamic ? "images" : "static-images";
    return (
        <Image
            className={className}
            src={getUrlImage(`/${directory}${path}`)}
            onClick={onClick}
        />
    );
};

export default BackendImage;
