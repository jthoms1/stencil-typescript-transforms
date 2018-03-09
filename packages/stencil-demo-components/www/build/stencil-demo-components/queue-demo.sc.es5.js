/*! Built with http://stenciljs.com */
StencilDemoComponents.loadBundle('queue-demo', ['exports'], function (exports) {
    var h = window.StencilDemoComponents.h;
    var Context = window.StencilDemoComponents.Context;
    var QueueDemo = /** @class */ (function () {
        function QueueDemo() {
            this.elapsed = 0;
            this.seconds = 0;
        }
        QueueDemo.prototype.componentDidLoad = function () {
            var tick = this.tick.bind(this);
            this.intervalID = setInterval(tick, 1000);
        };
        QueueDemo.prototype.tick = function () {
            this.seconds = (this.seconds % 10) + 1;
        };
        QueueDemo.prototype.hostData = function () {
            var elapsed = this.elapsed;
            var t = (elapsed / 1000) % 10;
            var scale = 1 + (t > 5 ? 10 - t : t) / 10;
            var containerStyle = {
                position: 'absolute',
                transformOrigin: '0 0',
                left: '50%',
                top: '50%',
                width: '10px',
                height: '10px',
                background: '#eee',
                transform: 'scaleX(' + (scale / 2.1) + ') scaleY(0.7) translateZ(0.1px)'
            };
            return {
                style: containerStyle
            };
        };
        QueueDemo.prototype.render = function () {
            return (h("div", null, h("queue-triangle", { x: 0, y: 0, s: 1000, seconds: this.seconds })));
        };
        Object.defineProperty(QueueDemo, "is", {
            get: function () { return "queue-demo"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(QueueDemo, "encapsulation", {
            get: function () { return "shadow"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(QueueDemo, "properties", {
            get: function () { return { "elapsed": { "type": Number, "attr": "elapsed" } }; },
            enumerable: true,
            configurable: true
        });
        return QueueDemo;
    }());
    var QueueDot = /** @class */ (function () {
        function QueueDot() {
            this.hover = false;
        }
        QueueDot.prototype.hostData = function () {
            var _this = this;
            var s = this.size * 1.3;
            var style = {
                position: 'absolute',
                font: 'normal 15px sans-serif',
                textAlign: 'center',
                cursor: 'pointer',
                width: s + 'px',
                height: s + 'px',
                left: (this.x) + 'px',
                top: (this.y) + 'px',
                borderRadius: (s / 2) + 'px',
                lineHeight: (s) + 'px',
                color: this.hover ? '#B9C0D2' : 'black',
                background: this.hover ? 'black' : '#B9C0D2'
            };
            return {
                style: style,
                onmouseenter: function () { return _this.hover = true; },
                onmouseleave: function () { return _this.hover = false; }
            };
        };
        QueueDot.prototype.render = function () {
            return (this.hover ? '**' + this.text + '**' : this.text);
        };
        Object.defineProperty(QueueDot, "is", {
            get: function () { return "queue-dot"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(QueueDot, "encapsulation", {
            get: function () { return "shadow"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(QueueDot, "properties", {
            get: function () { return { "hover": { "state": true }, "size": { "type": Number, "attr": "size" }, "text": { "type": String, "attr": "text" }, "x": { "type": Number, "attr": "x" }, "y": { "type": Number, "attr": "y" } }; },
            enumerable: true,
            configurable: true
        });
        return QueueDot;
    }());
    var targetSize = 25;
    var QueueTriangle = /** @class */ (function () {
        function QueueTriangle() {
        }
        QueueTriangle.prototype.render = function () {
            var s = this.s;
            if (s <= targetSize) {
                return (h("queue-dot", { x: this.x - (targetSize / 2), y: this.y - (targetSize / 2), size: targetSize, text: this.seconds.toString() }));
            }
            s = s / 2;
            var slowDown = false;
            if (slowDown) {
                var e = performance.now() + 0.8;
                while (performance.now() < e) {
                    // Artificially long execution time.
                }
            }
            return [
                h("queue-triangle", { x: this.x, y: this.y - (s / 2), s: s, seconds: this.seconds }),
                h("queue-triangle", { x: this.x - s, y: this.y + (s / 2), s: s, seconds: this.seconds }),
                h("queue-triangle", { x: this.x + s, y: this.y + (s / 2), s: s, seconds: this.seconds })
            ];
        };
        Object.defineProperty(QueueTriangle, "is", {
            get: function () { return "queue-triangle"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(QueueTriangle, "encapsulation", {
            get: function () { return "shadow"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(QueueTriangle, "properties", {
            get: function () { return { "s": { "type": Number, "attr": "s" }, "seconds": { "type": Number, "attr": "seconds" }, "x": { "type": Number, "attr": "x" }, "y": { "type": Number, "attr": "y" } }; },
            enumerable: true,
            configurable: true
        });
        return QueueTriangle;
    }());
    exports.QueueDemo = QueueDemo;
    exports.QueueDot = QueueDot;
    exports.QueueTriangle = QueueTriangle;
    Object.defineProperty(exports, '__esModule', { value: true });
});
