import { Component, Prop, State } from '@stencil/core';

export interface GithubData {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  html_url: string;
  bio: string
}

@Component({
  tag: 'hello-there',
  scoped: true,
  styles: `
    img.roundup {
      border: 2px solid #fff;
      height: 40px;
      width: 40px;
      border-radius: 23px;
      display: block;
      margin: -15px auto 0;
    }
  `
})
export class HelloThere {

  @Prop() userid: string = '';
  @State() userData: GithubData;

  componentWillLoad() {
    fetch(`https://api.github.com/users/${this.userid}`)
      .then(rsp => rsp.json())
      .then((data: GithubData) => {
        this.userData = data;
      });
  }

  render() {
    if (!this.userData) {
      return null;
    }
    return (
      <div>
        <small>
          {this.userData.name} / <a href={this.userData.html_url}>@{this.userData.login}</a>
        </small>
        <img class="roundup" src={this.userData.avatar_url} alt="gravatar" />
      </div>
    );
  }
}
