"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Shape.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.toString = function () {
        return "(x: " + this._x + " , y: " + this._y + ")";
    };
    return Shape;
}());
exports.Shape = Shape;
//# sourceMappingURL=shape.js.map