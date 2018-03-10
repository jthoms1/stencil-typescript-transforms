import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'img-mask',
  scoped: true,
  styles: `
    .blur-filter {
      filter: blur(2px) grayscale(80%);
    }
    .blur-window {
      position: absolute;
      right: 50%;
      box-shadow: 0 0 22px -2px rgba(0, 0, 0, 0.2)
    }
  `
})
export class ImgMask {

  @Prop() src: string = '';
  @Prop() width: number = 0;
  @Prop() maskHeight: number = 0;
  @Prop() maskTop: number = 0;

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
      <img width={this.width} class="nostyle blur-filter" src={this.src} />,
      <div class="blur-window" style={{
        "width": `${this.width}px`,
        "background-size": `${this.width}px`,
        "background-image": `url(${this.src})`,
        "margin-right": `-${this.width / 2}px`,
        "top": `${this.maskTop}px`,
        "background-position": `0 -${this.maskTop}px`,
        "height": `${this.maskHeight}px`
      }}></div>
    ];
  }
}
