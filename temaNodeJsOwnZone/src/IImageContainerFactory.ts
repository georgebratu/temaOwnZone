import {IImageContainer} from "./IImageContainer";
import {ICachedImageContainer} from "./ICachedImageContainer";

export interface IImageContainerFactory {
    createImageContainer(cachedImageContainer: ICachedImageContainer) : IImageContainer;
    createCachedImageContainer() : ICachedImageContainer;
}