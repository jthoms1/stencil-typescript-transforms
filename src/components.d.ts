/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  HelloThere as HelloThere
} from './components/hello-there/hello-there';

declare global {
  interface HTMLHelloThereElement extends HelloThere, HTMLStencilElement {
  }
  var HTMLHelloThereElement: {
    prototype: HTMLHelloThereElement;
    new (): HTMLHelloThereElement;
  };
  interface HTMLElementTagNameMap {
    "hello-there": HTMLHelloThereElement;
  }
  interface ElementTagNameMap {
    "hello-there": HTMLHelloThereElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "hello-there": JSXElements.HelloThereAttributes;
    }
  }
  namespace JSXElements {
    export interface HelloThereAttributes extends HTMLAttributes {
      userid?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
