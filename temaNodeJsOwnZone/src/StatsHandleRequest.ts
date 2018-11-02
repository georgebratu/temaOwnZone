import {IHandleRequest} from "./IHandleRequest";
import {ICachedImageContainer} from "./ICachedImageContainer";

export class StatsHandleRequest implements IHandleRequest {
    cachedImageContainer: ICachedImageContainer;

    constructor(cachedImageContainer: ICachedImageContainer) {
        this.cachedImageContainer = cachedImageContainer;
    }

    handle (req, res): void {
        let stats = this.cachedImageContainer.getStats();
        res.write(stats);
        res.end();
    }
}