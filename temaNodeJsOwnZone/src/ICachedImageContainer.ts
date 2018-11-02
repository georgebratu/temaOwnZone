import Promise from "ts-promise";

export interface ICachedImageContainer {
    getData(imagePath: string, cachedImagePath: string, width: number, height: number) : Promise<any>;
    getPath(imageName: string, width: number, height: number) : string;
    readFile(filePath: string) : Promise<any>;
    resizeImage(imagePath: string, cachedImagePath: string, width: number, height: number) : Promise<any>;
    getStats() : string;
}