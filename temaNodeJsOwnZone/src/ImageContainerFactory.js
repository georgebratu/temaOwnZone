"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageContainer_1 = require("./ImageContainer");
var CachedImageContainer_1 = require("./CachedImageContainer");
var ImageContainerFactory = /** @class */ (function () {
    function ImageContainerFactory() {
    }
    ImageContainerFactory.prototype.createImageContainer = function (cachedImageContainer) {
        return new ImageContainer_1.ImageContainer(cachedImageContainer);
    };
    ImageContainerFactory.prototype.createCachedImageContainer = function () {
        return new CachedImageContainer_1.CachedImageContainer();
    };
    return ImageContainerFactory;
}());
exports.ImageContainerFactory = ImageContainerFactory;
//# sourceMappingURL=ImageContainerFactory.js.map