import { Component, Prop, State, Watch } from '@stencil/core';

export interface GithubData {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  html_url: string;
  bio: string;
}

@Component({
  tag: 'github-intro',
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
export class GithubIntro {

  @Prop() userid: string = '';
  @State() userData: GithubData;

  @Watch('userid')
  fetchGithubData(userid) {
    fetch(`https://api.github.com/users/${userid}`)
      .then(rsp => rsp.json())
      .then((data: GithubData) => {
        this.userData = data;
      });
  }

  componentWillLoad() {
    this.fetchGithubData(this.userid);
  }

  render() {
    if (!this.userData) {
      return null;
    }
    return (
      <div>
        <small>
          {this.userData.name ?
            `${this.userData.name} / ` :
            null}
          <a href={this.userData.html_url}>@{this.userData.login}</a>
        </small>
        {this.userData.avatar_url ?
          <img class="roundup" src={this.userData.avatar_url} alt="gravatar" /> :
          null}
      </div>
    );
  }
}
