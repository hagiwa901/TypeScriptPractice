var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.moveX = function (n) {
        this.x += n;
    };
    Point.prototype.moveY = function (n) {
        this.y += n;
    };
    return Point;
}());
var point = new Point();
point.moveX(10);
console.log('${point.x}, ${point.y}');
