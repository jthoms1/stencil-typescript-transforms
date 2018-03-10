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

/**
 * This component accepts a github userid and then displays a brief summary of their details
 * including their avatar img.
 */
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

  /**
   * The github userid for the user that you would like to display
   */
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
    return [
      <small>
        {this.userData.name ?
          `${this.userData.name} / ` :
          null}
        <a href={this.userData.html_url}>@{this.userData.login}</a>
      </small>,
      (this.userData.avatar_url) ?
        <img class="roundup" src={this.userData.avatar_url} alt="gravatar" /> :
        null
    ];
  }
}
