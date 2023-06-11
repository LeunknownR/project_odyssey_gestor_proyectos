import { BackendImageProps } from "../../types";
import { Image } from "./styles";

const BackendImage = ({ className, path, isDynamic = true }: BackendImageProps) => {
    const directory = isDynamic ? "images" : "static-images"
    return (
        <Image
            className={className}
            src={`http://localhost:3006/${directory}${path}`}
        />
    );
};

export default BackendImage;
