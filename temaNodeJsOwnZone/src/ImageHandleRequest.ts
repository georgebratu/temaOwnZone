import {IHandleRequest} from "./IHandleRequest";
import * as url from 'url';
import {IImageContainer} from "./IImageContainer";

export class ImageHandleRequest implements IHandleRequest {
    imageContainer: IImageContainer;

    constructor(imageContainer: IImageContainer) {
        this.imageContainer = imageContainer;
    }

    handle (req, res): void {
        let imageName = req.params.imageName;
        let parsedUrl = url.parse(req.url, true);

        let width, height;
        if (parsedUrl.query.size) {
            let size: string = parsedUrl.query.size as string;
            [width, height] = size.split('x');
        }

        this.imageContainer.getData(imageName, width, height).then(data => {
            res.statusCode = 200;
            res.write(data);
            res.end();
        }).catch((err) => {
            res.statusCode = 500;
            res.write(err.toString());
            res.end();
        });
    }
}