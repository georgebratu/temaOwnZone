import * as express from 'express';
import {ImageContainerFactory} from "./ImageContainerFactory";
import {ImageHandleRequest} from "./ImageHandleRequest";
import {StatsHandleRequest} from "./StatsHandleRequest";

const app = express();

let imageContainerFactory = new ImageContainerFactory();
let cachedImageContainer = imageContainerFactory.createCachedImageContainer();
let imageContainer = imageContainerFactory.createImageContainer(cachedImageContainer);

let imageHandleRequest = new ImageHandleRequest(imageContainer);

app.get('/image/:imageName', (req, res) => {
    imageHandleRequest.handle(req, res);
});

let statsHandledRequest = new StatsHandleRequest(cachedImageContainer);

app.get('/stats', (req, res) => {
    statsHandledRequest.handle(req, res);
});

app.listen(3000, () => {
    console.log('listening..');
});

