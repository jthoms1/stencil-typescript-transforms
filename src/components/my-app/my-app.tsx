import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styles: `
    header {
      background: #5851ff;
      color: white;
      height: 56px;
      display: flex;
      align-items: center;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    }
    h1 {
      font-size: 1.4rem;
      font-weight: 500;
      color: #fff;
      padding: 0 12px;
    }
  `
})
export class MyApp {

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route url='/' component='app-home' exact={true}>
            </stencil-route>

            <stencil-route url='/profile/:name' component='app-profile'>
            </stencil-route>
          </stencil-router>
        </main>
      </div>
    );
  }
}
