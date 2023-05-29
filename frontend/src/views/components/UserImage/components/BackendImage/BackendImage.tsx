import { BackendImageProps } from "../../types";
import { Image } from "./styles";

const BackendImage = ({ className, path }: BackendImageProps) => {
    return (
        <Image
            className={className}
            src={`http://localhost:3006/images${path}`}
            // src={`${process.env}`}
        />
    );
};

export default BackendImage;
