import {IImageContainerFactory} from "./IImageContainerFactory";
import {IImageContainer} from "./IImageContainer";
import {ImageContainer} from "./ImageContainer";
import {CachedImageContainer} from "./CachedImageContainer";
import {ICachedImageContainer} from "./ICachedImageContainer";

export class ImageContainerFactory implements IImageContainerFactory{
    createImageContainer(cachedImageContainer: ICachedImageContainer) : IImageContainer {
        return new ImageContainer(cachedImageContainer);
    }

    createCachedImageContainer() : ICachedImageContainer {
        return new CachedImageContainer();
    }
}