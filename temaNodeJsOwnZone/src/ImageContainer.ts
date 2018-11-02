// @ts-ignore
import Promise from "ts-promise";
import { IImageContainer } from "./IImageContainer";
import { ICachedImageContainer } from "./ICachedImageContainer";
import * as fs from 'fs';

export class ImageContainer implements IImageContainer {
    cachedImageContainer: ICachedImageContainer;

    constructor(cachedImageContainer: ICachedImageContainer) {
        this.cachedImageContainer = cachedImageContainer;
    }

    // @ts-ignore
    async getData(imageName, width, height) : Promise<any> {
        let imagePath = this.getPath(imageName);

        if (width && height) {
            let cachedImagePath = this.cachedImageContainer.getPath(imageName, width, height);
            return await this.cachedImageContainer.getData(imagePath, cachedImagePath, width, height);
        }
        else {
            return await this.readFile(imagePath);
        }
    }

    getPath(imageName) : string {
        return `./images/${imageName}`;
    }

    // @ts-ignore
    async readFile(filePath) : Promise<any> {
        //return await util.promisify(fs.readFile);
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
}