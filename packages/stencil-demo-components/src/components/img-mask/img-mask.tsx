import { Component, Prop } from '@stencil/core';

/**
 * This component accepts an image and shows a window of view over a blur on the rest of the image
 */
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

  /**
   * The url to the image
   */
  @Prop() src: string = '';

  /**
   * The width of the image
   */
  @Prop() width: number = 0;

  /**
   * The height of the mask window
   */
  @Prop() maskHeight: number = 0;

  /**
   * The starting location of the mask window
   */
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
