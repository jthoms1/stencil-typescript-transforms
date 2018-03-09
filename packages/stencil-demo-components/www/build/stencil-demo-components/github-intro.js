/*! Built with http://stenciljs.com */
const { h, Context } = window.StencilDemoComponents;

class GithubIntro {
    constructor() {
        this.userid = '';
    }
    fetchGithubData(userid) {
        fetch(`https://api.github.com/users/${userid}`)
            .then(rsp => rsp.json())
            .then((data) => {
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
        return (h("div", null,
            h("small", null,
                this.userData.name ?
                    `${this.userData.name} / ` :
                    null,
                h("a", { href: this.userData.html_url },
                    "@",
                    this.userData.login)),
            this.userData.avatar_url ?
                h("img", { class: "roundup", src: this.userData.avatar_url, alt: "gravatar" }) :
                null));
    }
    static get is() { return "github-intro"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return { "userData": { "state": true }, "userid": { "type": String, "attr": "userid", "watchCallbacks": ["fetchGithubData"] } }; }
    static get style() { return "img.roundup {\n      border: 2px solid #fff;\n      height: 40px;\n      width: 40px;\n      border-radius: 23px;\n      display: block;\n      margin: -15px auto 0;\n    }"; }
}

export { GithubIntro };
