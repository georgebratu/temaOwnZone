"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ImageContainerFactory_1 = require("./ImageContainerFactory");
var ImageHandleRequest_1 = require("./ImageHandleRequest");
var StatsHandleRequest_1 = require("./StatsHandleRequest");
var app = express();
var imageContainerFactory = new ImageContainerFactory_1.ImageContainerFactory();
var cachedImageContainer = imageContainerFactory.createCachedImageContainer();
var imageContainer = imageContainerFactory.createImageContainer(cachedImageContainer);
var imageHandleRequest = new ImageHandleRequest_1.ImageHandleRequest(imageContainer);
app.get('/image/:imageName', function (req, res) {
    imageHandleRequest.handle(req, res);
});
var statsHandledRequest = new StatsHandleRequest_1.StatsHandleRequest(cachedImageContainer);
app.get('/stats', function (req, res) {
    statsHandledRequest.handle(req, res);
});
app.listen(3000, function () {
    console.log('listening..');
});
//# sourceMappingURL=app.js.map