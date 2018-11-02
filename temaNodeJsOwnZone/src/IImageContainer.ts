import Promise from "ts-promise";

export interface IImageContainer {
    getData(imageName: string, width: number, height: number) : Promise<any>;
    getPath(imageName: string) : string;
    readFile(filePath: string) : Promise<any>;
}