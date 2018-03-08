import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'img-mask',
  scoped: true,
  styles: `
    .cointainer {
      position: relative;
      overflow: hidden;
    }
    .blur-filter {
      filter: blur(2px) grayscale(80%);
    }
  `
})
export class ImgMask {

  @Prop() src: string = '';
  @Prop() width: number = 0;
  @Prop() maskHeight: number = 0;
  @Prop() maskTop: number = 0;

  render() {
    return (
      <div class="container">
        <img width={this.width} class="nostyle blur-filter" src={this.src} />
        <div style={{
          "width": `${this.width}px`,
          "background-size": `${this.width}px`,
          "background-image": `url(${this.src})`,
          "position": "absolute",
          "right": "50%",
          "margin-right": `-${this.width / 2}px`,
          "top": `${this.maskTop + 20}px`,
          "background-position": `0 -${this.maskTop}px`,
          "height": `${this.maskHeight}px`
        }}></div>
      </div>
    );
  }
}
