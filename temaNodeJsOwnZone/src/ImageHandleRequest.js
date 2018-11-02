"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url = require("url");
var ImageHandleRequest = /** @class */ (function () {
    function ImageHandleRequest(imageContainer) {
        this.imageContainer = imageContainer;
    }
    ImageHandleRequest.prototype.handle = function (req, res) {
        var _a;
        var imageName = req.params.imageName;
        var parsedUrl = url.parse(req.url, true);
        var width, height;
        if (parsedUrl.query.size) {
            var size = parsedUrl.query.size;
            _a = size.split('x'), width = _a[0], height = _a[1];
        }
        this.imageContainer.getData(imageName, width, height).then(function (data) {
            res.statusCode = 200;
            res.write(data);
            res.end();
        }).catch(function (err) {
            res.statusCode = 500;
            res.write(err.toString());
            res.end();
        });
    };
    return ImageHandleRequest;
}());
exports.ImageHandleRequest = ImageHandleRequest;
//# sourceMappingURL=ImageHandleRequest.js.map