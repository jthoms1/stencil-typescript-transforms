/*! Built with http://stenciljs.com */
const { h, Context } = window.StencilDemoComponents;

class ImgMask {
    constructor() {
        this.src = '';
        this.width = 0;
        this.maskHeight = 0;
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
            h("div", { style: {
                    "width": `${this.width}px`,
                    "background-size": `${this.width}px`,
                    "background-image": `url(${this.src})`,
                    "position": "absolute",
                    "right": "50%",
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
    static get style() { return ".blur-filter[data-img-mask] {\n      filter: blur(2px) grayscale(80%);\n    }"; }
}

export { ImgMask };
