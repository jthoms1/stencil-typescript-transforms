/*! Built with http://stenciljs.com */
const { h, Context } = window.StencilDemoComponents;

<<<<<<< HEAD
/**
 * This component accepts an image and shows a window of view over a blur on the rest of the image
 */
class ImgMask {
    constructor() {
        /**
         * The url to the image
         */
        this.src = '';
        /**
         * The width of the image
         */
        this.width = 0;
        /**
         * The height of the mask window
         */
        this.maskHeight = 0;
        /**
         * The starting location of the mask window
         */
=======
class ImgMask {
    constructor() {
        this.src = '';
        this.width = 0;
        this.maskHeight = 0;
>>>>>>> yep
        this.maskTop = 0;
    }
    hostData() {
        return {
            style: {
                position: "relative",
                overflow: "hidden"
            }
        };
    }
    render() {
        return [
            h("img", { width: this.width, class: "nostyle blur-filter", src: this.src }),
<<<<<<< HEAD
            h("div", { class: "blur-window", style: {
                    "width": `${this.width}px`,
                    "background-size": `${this.width}px`,
                    "background-image": `url(${this.src})`,
=======
            h("div", { style: {
                    "width": `${this.width}px`,
                    "background-size": `${this.width}px`,
                    "background-image": `url(${this.src})`,
                    "position": "absolute",
                    "right": "50%",
>>>>>>> yep
                    "margin-right": `-${this.width / 2}px`,
                    "top": `${this.maskTop}px`,
                    "background-position": `0 -${this.maskTop}px`,
                    "height": `${this.maskHeight}px`
                } })
        ];
    }
    static get is() { return "img-mask"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return { "maskHeight": { "type": Number, "attr": "mask-height" }, "maskTop": { "type": Number, "attr": "mask-top" }, "src": { "type": String, "attr": "src" }, "width": { "type": Number, "attr": "width" } }; }
<<<<<<< HEAD
    static get style() { return ".blur-filter[data-img-mask] {\n      filter: blur(2px) grayscale(80%);\n    }\n    .blur-window[data-img-mask] {\n      position: absolute;\n      right: 50%;\n      box-shadow: 0 0 22px -2px rgba(0, 0, 0, 0.2)\n    }"; }
=======
    static get style() { return ".blur-filter[data-img-mask] {\n      filter: blur(2px) grayscale(80%);\n    }"; }
>>>>>>> yep
}

export { ImgMask };
