/*! Built with http://stenciljs.com */
StencilDemoComponents.loadBundle('github-intro', ['exports'], function (exports) {
    var h = window.StencilDemoComponents.h;
    var Context = window.StencilDemoComponents.Context;
    var GithubIntro = /** @class */ (function () {
        function GithubIntro() {
            this.userid = '';
        }
        GithubIntro.prototype.fetchGithubData = function (userid) {
            var _this = this;
            fetch("https://api.github.com/users/" + userid)
                .then(function (rsp) { return rsp.json(); })
                .then(function (data) {
                _this.userData = data;
            });
        };
        GithubIntro.prototype.componentWillLoad = function () {
            this.fetchGithubData(this.userid);
        };
        GithubIntro.prototype.render = function () {
            if (!this.userData) {
                return null;
            }
            return (h("div", null, h("small", null, this.userData.name ?
                this.userData.name + " / " :
                null, h("a", { href: this.userData.html_url }, "@", this.userData.login)), this.userData.avatar_url ?
                h("img", { class: "roundup", src: this.userData.avatar_url, alt: "gravatar" }) :
                null));
        };
        Object.defineProperty(GithubIntro, "is", {
            get: function () { return "github-intro"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GithubIntro, "encapsulation", {
            get: function () { return "scoped"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GithubIntro, "properties", {
            get: function () { return { "userData": { "state": true }, "userid": { "type": String, "attr": "userid", "watchCallbacks": ["fetchGithubData"] } }; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GithubIntro, "style", {
            get: function () { return "img.roundup {\n      border: 2px solid #fff;\n      height: 40px;\n      width: 40px;\n      border-radius: 23px;\n      display: block;\n      margin: -15px auto 0;\n    }"; },
            enumerable: true,
            configurable: true
        });
        return GithubIntro;
    }());
    exports.GithubIntro = GithubIntro;
    Object.defineProperty(exports, '__esModule', { value: true });
});
