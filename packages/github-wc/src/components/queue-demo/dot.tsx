
import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'queue-dot',
  shadow: true
})
export class QueueDot {
  @Prop() size: number;
  @Prop() x: number;
  @Prop() y: number;
  @Prop() text: string;

  @State() hover: boolean = false;

  hostData() {
    const s = this.size * 1.3;
    const style = {
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
      onmouseenter: () => this.hover = true,
      onmouseleave: () => this.hover = false
    };
  }

  render() {
    return (
      this.hover ? '**' + this.text + '**' : this.text
    );
  }
}
