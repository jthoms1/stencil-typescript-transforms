/*! Built with http://stenciljs.com */
StencilDemoComponents.loadBundle("qqb3xarq",["exports"],function(t){var e=window.StencilDemoComponents.h,n=(window.StencilDemoComponents.Context,function(){function t(){this.userid=""}return t.prototype.fetchGithubData=function(t){var e=this;fetch("https://api.github.com/users/"+t).then(function(t){return t.json()}).then(function(t){e.userData=t})},t.prototype.componentWillLoad=function(){this.fetchGithubData(this.userid)},t.prototype.render=function(){return this.userData?e("div",null,e("small",null,this.userData.name?this.userData.name+" / ":null,e("a",{href:this.userData.html_url},"@",this.userData.login)),this.userData.avatar_url?e("img",{class:"roundup",src:this.userData.avatar_url,alt:"gravatar"}):null):null},Object.defineProperty(t,"is",{get:function(){return"github-intro"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{userData:{state:!0},userid:{type:String,attr:"userid",watchCallbacks:["fetchGithubData"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"img.roundup[data-github-intro]{border:2px solid #fff;height:40px;width:40px;border-radius:23px;display:block;margin:-15px auto 0}"},enumerable:!0,configurable:!0}),t}());t.GithubIntro=n,Object.defineProperty(t,"__esModule",{value:!0})});