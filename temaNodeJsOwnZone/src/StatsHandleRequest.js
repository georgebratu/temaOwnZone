"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatsHandleRequest = /** @class */ (function () {
    function StatsHandleRequest(cachedImageContainer) {
        this.cachedImageContainer = cachedImageContainer;
    }
    StatsHandleRequest.prototype.handle = function (req, res) {
        var stats = this.cachedImageContainer.getStats();
        res.write(stats);
        res.end();
    };
    return StatsHandleRequest;
}());
exports.StatsHandleRequest = StatsHandleRequest;
//# sourceMappingURL=StatsHandleRequest.js.map