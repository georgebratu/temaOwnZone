import {ICachedImageContainer} from "./ICachedImageContainer";
import * as gm from 'gm';
import * as fs from 'fs';
// @ts-ignore
import Promise from "ts-promise";

export class CachedImageContainer implements ICachedImageContainer {
    hits: number = 0;
    misses: number = 0;

    getStats() : string {
        return `Cache hits/misses: ${this.hits}/${this.misses}`;
    }

    // @ts-ignore
    async getData(imagePath: string, cachedImagePath: string, width: number, height: number) : Promise<any> {
        try {
            let result = await this.readFile(cachedImagePath);
            this.hits++;
            return result;
        }
        catch(e) {
            await this.resizeImage(imagePath, cachedImagePath, width, height);
            let result = await this.readFile(cachedImagePath);
            this.misses++;
            return result;
        }
    }

    getPath(imageName: string, width: number, height: number) : string {
        return `./images/cache/${width}x${height}-${imageName}`;
    }

    // @ts-ignore
    async readFile(filePath: string) : Promise<any> {
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

    // @ts-ignore
    async resizeImage(imagePath: string, cachedImagePath: string, width: number, height: number): Promise<any> {
        return new Promise((resolve, reject) => {
            gm(imagePath)
                .resize(width, height)
                .write(cachedImagePath, (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(imagePath);
                    }
                });
        });
    }
}