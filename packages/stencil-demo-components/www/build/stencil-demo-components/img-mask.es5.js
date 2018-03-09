/*! Built with http://stenciljs.com */
StencilDemoComponents.loadBundle('img-mask', ['exports'], function (exports) {
    var h = window.StencilDemoComponents.h;
    var Context = window.StencilDemoComponents.Context;
    var ImgMask = /** @class */ (function () {
        function ImgMask() {
            this.src = '';
            this.width = 0;
            this.maskHeight = 0;
            this.maskTop = 0;
        }
        ImgMask.prototype.hostData = function () {
            return {
                style: {
                    position: "relative",
                    overflow: "hidden"
                }
            };
        };
        ImgMask.prototype.render = function () {
            return [
                h("img", { width: this.width, class: "nostyle blur-filter", src: this.src }),
                h("div", { style: {
                        "width": this.width + "px",
                        "background-size": this.width + "px",
                        "background-image": "url(" + this.src + ")",
                        "position": "absolute",
                        "right": "50%",
                        "margin-right": "-" + this.width / 2 + "px",
                        "top": this.maskTop + "px",
                        "background-position": "0 -" + this.maskTop + "px",
                        "height": this.maskHeight + "px"
                    } })
            ];
        };
        Object.defineProperty(ImgMask, "is", {
            get: function () { return "img-mask"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImgMask, "encapsulation", {
            get: function () { return "scoped"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImgMask, "properties", {
            get: function () { return { "maskHeight": { "type": Number, "attr": "mask-height" }, "maskTop": { "type": Number, "attr": "mask-top" }, "src": { "type": String, "attr": "src" }, "width": { "type": Number, "attr": "width" } }; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImgMask, "style", {
            get: function () { return ".blur-filter {\n      filter: blur(2px) grayscale(80%);\n    }"; },
            enumerable: true,
            configurable: true
        });
        return ImgMask;
    }());
    exports.ImgMask = ImgMask;
    Object.defineProperty(exports, '__esModule', { value: true });
});
